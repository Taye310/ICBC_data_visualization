import pandas as pd
import numpy as np
import torch
import os
import torch.nn.functional as F

class Net(torch.nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.layer1 = torch.nn.Linear(8, 64)
        self.layer2 = torch.nn.Linear(64, 128)
        self.layer3 = torch.nn.Linear(128, 3)

    def forward(self, x):
        x = F.relu(self.layer1(x))
        x = self.layer2(x)
        return x

net = Net()

optimizer = torch.optim.Adam(net.parameters(), lr=0.05)
loss_func = torch.nn.MSELoss()

df_data = pd.read_csv('data.csv')
df_label = pd.read_csv('label.csv')
data = torch.unsqueeze(torch.FloatTensor(np.array(df_data)), dim=1)
label = torch.unsqueeze(torch.FloatTensor(np.array(df_label)), dim=1)

for i in range(1000):
    prediction = net(data)
    loss = loss_func(prediction, label)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    print("epoch:{}, loss:{}".format(i, loss.item()))