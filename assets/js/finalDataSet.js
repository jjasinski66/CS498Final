var data = [
{date:"1/1/1979",Con_Sent:72.1,Civ_Part:63.6,Unemp_Rate:5.9,M2_Vel:1.836},
{date:"2/1/1979",Con_Sent:73.9,Civ_Part:63.8,Unemp_Rate:5.9,M2_Vel:1.836},
{date:"3/1/1979",Con_Sent:68.4,Civ_Part:63.8,Unemp_Rate:5.8,M2_Vel:1.836},
{date:"4/1/1979",Con_Sent:66,Civ_Part:63.5,Unemp_Rate:5.8,M2_Vel:1.839},
{date:"5/1/1979",Con_Sent:68.1,Civ_Part:63.3,Unemp_Rate:5.6,M2_Vel:1.839},
{date:"6/1/1979",Con_Sent:65.8,Civ_Part:63.5,Unemp_Rate:5.7,M2_Vel:1.839},
{date:"7/1/1979",Con_Sent:60.4,Civ_Part:63.6,Unemp_Rate:5.7,M2_Vel:1.848},
{date:"8/1/1979",Con_Sent:64.5,Civ_Part:63.6,Unemp_Rate:6,M2_Vel:1.848},
{date:"9/1/1979",Con_Sent:66.7,Civ_Part:63.8,Unemp_Rate:5.9,M2_Vel:1.848},
{date:"10/1/1979",Con_Sent:62.1,Civ_Part:63.7,Unemp_Rate:6,M2_Vel:1.862},
{date:"11/1/1979",Con_Sent:63.3,Civ_Part:63.7,Unemp_Rate:5.9,M2_Vel:1.862},
{date:"12/1/1979",Con_Sent:61,Civ_Part:63.9,Unemp_Rate:6,M2_Vel:1.862},
{date:"1/1/1980",Con_Sent:67,Civ_Part:64,Unemp_Rate:6.3,M2_Vel:1.874},
{date:"2/1/1980",Con_Sent:66.9,Civ_Part:64,Unemp_Rate:6.3,M2_Vel:1.874},
{date:"3/1/1980",Con_Sent:56.5,Civ_Part:63.7,Unemp_Rate:6.3,M2_Vel:1.874},
{date:"4/1/1980",Con_Sent:52.7,Civ_Part:63.8,Unemp_Rate:6.9,M2_Vel:1.849},
{date:"5/1/1980",Con_Sent:51.7,Civ_Part:63.9,Unemp_Rate:7.5,M2_Vel:1.849},
{date:"6/1/1980",Con_Sent:58.7,Civ_Part:63.7,Unemp_Rate:7.6,M2_Vel:1.849},
{date:"7/1/1980",Con_Sent:62.3,Civ_Part:63.8,Unemp_Rate:7.8,M2_Vel:1.833},
{date:"8/1/1980",Con_Sent:67.3,Civ_Part:63.7,Unemp_Rate:7.7,M2_Vel:1.833},
{date:"9/1/1980",Con_Sent:73.7,Civ_Part:63.6,Unemp_Rate:7.5,M2_Vel:1.833},
{date:"10/1/1980",Con_Sent:75,Civ_Part:63.7,Unemp_Rate:7.5,M2_Vel:1.879},
{date:"11/1/1980",Con_Sent:76.7,Civ_Part:63.8,Unemp_Rate:7.5,M2_Vel:1.879},
{date:"12/1/1980",Con_Sent:64.5,Civ_Part:63.6,Unemp_Rate:7.2,M2_Vel:1.879},
{date:"1/1/1981",Con_Sent:71.4,Civ_Part:63.9,Unemp_Rate:7.5,M2_Vel:1.932},
{date:"2/1/1981",Con_Sent:66.9,Civ_Part:63.9,Unemp_Rate:7.4,M2_Vel:1.932},
{date:"3/1/1981",Con_Sent:66.5,Civ_Part:64.1,Unemp_Rate:7.4,M2_Vel:1.932},
{date:"4/1/1981",Con_Sent:72.4,Civ_Part:64.2,Unemp_Rate:7.2,M2_Vel:1.903},
{date:"5/1/1981",Con_Sent:76.3,Civ_Part:64.3,Unemp_Rate:7.5,M2_Vel:1.903},
{date:"6/1/1981",Con_Sent:73.1,Civ_Part:63.7,Unemp_Rate:7.5,M2_Vel:1.903},
{date:"7/1/1981",Con_Sent:74.1,Civ_Part:63.8,Unemp_Rate:7.2,M2_Vel:1.925},
{date:"8/1/1981",Con_Sent:77.2,Civ_Part:63.8,Unemp_Rate:7.4,M2_Vel:1.925},
{date:"9/1/1981",Con_Sent:73.1,Civ_Part:63.5,Unemp_Rate:7.6,M2_Vel:1.925},
{date:"10/1/1981",Con_Sent:70.3,Civ_Part:63.8,Unemp_Rate:7.9,M2_Vel:1.889},
{date:"11/1/1981",Con_Sent:62.5,Civ_Part:63.9,Unemp_Rate:8.3,M2_Vel:1.889},
{date:"12/1/1981",Con_Sent:64.3,Civ_Part:63.6,Unemp_Rate:8.5,M2_Vel:1.889},
{date:"1/1/1982",Con_Sent:71,Civ_Part:63.7,Unemp_Rate:8.6,M2_Vel:1.842},
{date:"2/1/1982",Con_Sent:66.5,Civ_Part:63.8,Unemp_Rate:8.9,M2_Vel:1.842},
{date:"3/1/1982",Con_Sent:62,Civ_Part:63.8,Unemp_Rate:9,M2_Vel:1.842},
{date:"4/1/1982",Con_Sent:65.5,Civ_Part:63.9,Unemp_Rate:9.3,M2_Vel:1.835},
{date:"5/1/1982",Con_Sent:67.5,Civ_Part:64.2,Unemp_Rate:9.4,M2_Vel:1.835},
{date:"6/1/1982",Con_Sent:65.7,Civ_Part:63.9,Unemp_Rate:9.6,M2_Vel:1.835},
{date:"7/1/1982",Con_Sent:65.4,Civ_Part:64,Unemp_Rate:9.8,M2_Vel:1.825},
{date:"8/1/1982",Con_Sent:65.4,Civ_Part:64.1,Unemp_Rate:9.8,M2_Vel:1.825},
{date:"9/1/1982",Con_Sent:69.3,Civ_Part:64.1,Unemp_Rate:10.1,M2_Vel:1.825},
{date:"10/1/1982",Con_Sent:73.4,Civ_Part:64.1,Unemp_Rate:10.4,M2_Vel:1.806},
{date:"11/1/1982",Con_Sent:72.1,Civ_Part:64.2,Unemp_Rate:10.8,M2_Vel:1.806},
{date:"12/1/1982",Con_Sent:71.9,Civ_Part:64.1,Unemp_Rate:10.8,M2_Vel:1.806},
{date:"1/1/1983",Con_Sent:70.4,Civ_Part:63.9,Unemp_Rate:10.4,M2_Vel:1.748},
{date:"2/1/1983",Con_Sent:74.6,Civ_Part:63.8,Unemp_Rate:10.4,M2_Vel:1.748},
{date:"3/1/1983",Con_Sent:80.8,Civ_Part:63.7,Unemp_Rate:10.3,M2_Vel:1.748},
{date:"4/1/1983",Con_Sent:89.1,Civ_Part:63.8,Unemp_Rate:10.2,M2_Vel:1.755},
{date:"5/1/1983",Con_Sent:93.3,Civ_Part:63.7,Unemp_Rate:10.1,M2_Vel:1.755},
{date:"6/1/1983",Con_Sent:92.2,Civ_Part:64.3,Unemp_Rate:10.1,M2_Vel:1.755},
{date:"7/1/1983",Con_Sent:92.8,Civ_Part:64.1,Unemp_Rate:9.4,M2_Vel:1.78},
{date:"8/1/1983",Con_Sent:90.9,Civ_Part:64.3,Unemp_Rate:9.5,M2_Vel:1.78},
{date:"9/1/1983",Con_Sent:89.9,Civ_Part:64.3,Unemp_Rate:9.2,M2_Vel:1.78},
{date:"10/1/1983",Con_Sent:89.3,Civ_Part:64,Unemp_Rate:8.8,M2_Vel:1.798},
{date:"11/1/1983",Con_Sent:91.1,Civ_Part:64.1,Unemp_Rate:8.5,M2_Vel:1.798},
{date:"12/1/1983",Con_Sent:94.2,Civ_Part:64.1,Unemp_Rate:8.3,M2_Vel:1.798},
{date:"1/1/1984",Con_Sent:100.1,Civ_Part:63.9,Unemp_Rate:8,M2_Vel:1.814},
{date:"2/1/1984",Con_Sent:97.4,Civ_Part:64.1,Unemp_Rate:7.8,M2_Vel:1.814},
{date:"3/1/1984",Con_Sent:101,Civ_Part:64.1,Unemp_Rate:7.8,M2_Vel:1.814},
{date:"4/1/1984",Con_Sent:96.1,Civ_Part:64.3,Unemp_Rate:7.7,M2_Vel:1.822},
{date:"5/1/1984",Con_Sent:98.1,Civ_Part:64.5,Unemp_Rate:7.4,M2_Vel:1.822},
{date:"6/1/1984",Con_Sent:95.5,Civ_Part:64.6,Unemp_Rate:7.2,M2_Vel:1.822},
{date:"7/1/1984",Con_Sent:96.6,Civ_Part:64.6,Unemp_Rate:7.5,M2_Vel:1.831},
{date:"8/1/1984",Con_Sent:99.1,Civ_Part:64.4,Unemp_Rate:7.5,M2_Vel:1.831},
{date:"9/1/1984",Con_Sent:100.9,Civ_Part:64.4,Unemp_Rate:7.3,M2_Vel:1.831},
{date:"10/1/1984",Con_Sent:96.3,Civ_Part:64.4,Unemp_Rate:7.4,M2_Vel:1.817},
{date:"11/1/1984",Con_Sent:95.7,Civ_Part:64.5,Unemp_Rate:7.2,M2_Vel:1.817},
{date:"12/1/1984",Con_Sent:92.9,Civ_Part:64.6,Unemp_Rate:7.3,M2_Vel:1.817},
{date:"1/1/1985",Con_Sent:96,Civ_Part:64.7,Unemp_Rate:7.3,M2_Vel:1.802},
{date:"2/1/1985",Con_Sent:93.7,Civ_Part:64.7,Unemp_Rate:7.2,M2_Vel:1.802},
{date:"3/1/1985",Con_Sent:93.7,Civ_Part:64.9,Unemp_Rate:7.2,M2_Vel:1.802},
{date:"4/1/1985",Con_Sent:94.6,Civ_Part:64.9,Unemp_Rate:7.3,M2_Vel:1.798},
{date:"5/1/1985",Con_Sent:91.8,Civ_Part:64.8,Unemp_Rate:7.2,M2_Vel:1.798},
{date:"6/1/1985",Con_Sent:96.5,Civ_Part:64.6,Unemp_Rate:7.4,M2_Vel:1.798},
{date:"7/1/1985",Con_Sent:94,Civ_Part:64.7,Unemp_Rate:7.4,M2_Vel:1.799},
{date:"8/1/1985",Con_Sent:92.4,Civ_Part:64.6,Unemp_Rate:7.1,M2_Vel:1.799},
{date:"9/1/1985",Con_Sent:92.1,Civ_Part:64.9,Unemp_Rate:7.1,M2_Vel:1.799},
{date:"10/1/1985",Con_Sent:88.4,Civ_Part:65,Unemp_Rate:7.1,M2_Vel:1.796},
{date:"11/1/1985",Con_Sent:90.9,Civ_Part:64.9,Unemp_Rate:7,M2_Vel:1.796},
{date:"12/1/1985",Con_Sent:93.9,Civ_Part:65,Unemp_Rate:7,M2_Vel:1.796},
{date:"1/1/1986",Con_Sent:95.6,Civ_Part:64.9,Unemp_Rate:6.7,M2_Vel:1.795},
{date:"2/1/1986",Con_Sent:95.9,Civ_Part:65,Unemp_Rate:7.2,M2_Vel:1.795},
{date:"3/1/1986",Con_Sent:95.1,Civ_Part:65.1,Unemp_Rate:7.2,M2_Vel:1.795},
{date:"4/1/1986",Con_Sent:96.2,Civ_Part:65.1,Unemp_Rate:7.1,M2_Vel:1.764},
{date:"5/1/1986",Con_Sent:94.8,Civ_Part:65.2,Unemp_Rate:7.2,M2_Vel:1.764},
{date:"6/1/1986",Con_Sent:99.3,Civ_Part:65.4,Unemp_Rate:7.2,M2_Vel:1.764},
{date:"7/1/1986",Con_Sent:97.7,Civ_Part:65.4,Unemp_Rate:7,M2_Vel:1.745},
{date:"8/1/1986",Con_Sent:94.9,Civ_Part:65.3,Unemp_Rate:6.9,M2_Vel:1.745},
{date:"9/1/1986",Con_Sent:91.9,Civ_Part:65.4,Unemp_Rate:7,M2_Vel:1.745},
{date:"10/1/1986",Con_Sent:95.6,Civ_Part:65.4,Unemp_Rate:7,M2_Vel:1.726},
{date:"11/1/1986",Con_Sent:91.4,Civ_Part:65.4,Unemp_Rate:6.9,M2_Vel:1.726},
{date:"12/1/1986",Con_Sent:89.1,Civ_Part:65.3,Unemp_Rate:6.6,M2_Vel:1.726},
{date:"1/1/1987",Con_Sent:90.4,Civ_Part:65.4,Unemp_Rate:6.6,M2_Vel:1.723},
{date:"2/1/1987",Con_Sent:90.2,Civ_Part:65.5,Unemp_Rate:6.6,M2_Vel:1.723},
{date:"3/1/1987",Con_Sent:90.8,Civ_Part:65.5,Unemp_Rate:6.6,M2_Vel:1.723},
{date:"4/1/1987",Con_Sent:92.8,Civ_Part:65.4,Unemp_Rate:6.3,M2_Vel:1.74},
{date:"5/1/1987",Con_Sent:91.1,Civ_Part:65.7,Unemp_Rate:6.3,M2_Vel:1.74},
{date:"6/1/1987",Con_Sent:91.5,Civ_Part:65.5,Unemp_Rate:6.2,M2_Vel:1.74},
{date:"7/1/1987",Con_Sent:93.7,Civ_Part:65.6,Unemp_Rate:6.1,M2_Vel:1.757},
{date:"8/1/1987",Con_Sent:94.4,Civ_Part:65.7,Unemp_Rate:6,M2_Vel:1.757},
{date:"9/1/1987",Con_Sent:93.6,Civ_Part:65.5,Unemp_Rate:5.9,M2_Vel:1.757},
{date:"10/1/1987",Con_Sent:89.3,Civ_Part:65.7,Unemp_Rate:6,M2_Vel:1.781},
{date:"11/1/1987",Con_Sent:83.1,Civ_Part:65.7,Unemp_Rate:5.8,M2_Vel:1.781},
{date:"12/1/1987",Con_Sent:86.8,Civ_Part:65.7,Unemp_Rate:5.7,M2_Vel:1.781},
{date:"1/1/1988",Con_Sent:90.8,Civ_Part:65.8,Unemp_Rate:5.7,M2_Vel:1.774},
{date:"2/1/1988",Con_Sent:91.6,Civ_Part:65.9,Unemp_Rate:5.7,M2_Vel:1.774},
{date:"3/1/1988",Con_Sent:94.6,Civ_Part:65.7,Unemp_Rate:5.7,M2_Vel:1.774},
{date:"4/1/1988",Con_Sent:91.2,Civ_Part:65.8,Unemp_Rate:5.4,M2_Vel:1.78},
{date:"5/1/1988",Con_Sent:94.8,Civ_Part:65.7,Unemp_Rate:5.6,M2_Vel:1.78},
{date:"6/1/1988",Con_Sent:94.7,Civ_Part:65.8,Unemp_Rate:5.4,M2_Vel:1.78},
{date:"7/1/1988",Con_Sent:93.4,Civ_Part:65.9,Unemp_Rate:5.4,M2_Vel:1.795},
{date:"8/1/1988",Con_Sent:97.4,Civ_Part:66.1,Unemp_Rate:5.6,M2_Vel:1.795},
{date:"9/1/1988",Con_Sent:97.3,Civ_Part:65.9,Unemp_Rate:5.4,M2_Vel:1.795},
{date:"10/1/1988",Con_Sent:94.1,Civ_Part:66,Unemp_Rate:5.4,M2_Vel:1.818},
{date:"11/1/1988",Con_Sent:93,Civ_Part:66.2,Unemp_Rate:5.3,M2_Vel:1.818},
{date:"12/1/1988",Con_Sent:91.9,Civ_Part:66.1,Unemp_Rate:5.3,M2_Vel:1.818},
{date:"1/1/1989",Con_Sent:97.9,Civ_Part:66.5,Unemp_Rate:5.4,M2_Vel:1.846},
{date:"2/1/1989",Con_Sent:95.4,Civ_Part:66.3,Unemp_Rate:5.2,M2_Vel:1.846},
{date:"3/1/1989",Con_Sent:94.3,Civ_Part:66.3,Unemp_Rate:5,M2_Vel:1.846},
{date:"4/1/1989",Con_Sent:91.5,Civ_Part:66.4,Unemp_Rate:5.2,M2_Vel:1.867},
{date:"5/1/1989",Con_Sent:90.7,Civ_Part:66.3,Unemp_Rate:5.2,M2_Vel:1.867},
{date:"6/1/1989",Con_Sent:90.6,Civ_Part:66.5,Unemp_Rate:5.3,M2_Vel:1.867},
{date:"7/1/1989",Con_Sent:92,Civ_Part:66.5,Unemp_Rate:5.2,M2_Vel:1.859},
{date:"8/1/1989",Con_Sent:89.6,Civ_Part:66.5,Unemp_Rate:5.2,M2_Vel:1.859},
{date:"9/1/1989",Con_Sent:95.8,Civ_Part:66.4,Unemp_Rate:5.3,M2_Vel:1.859},
{date:"10/1/1989",Con_Sent:93.9,Civ_Part:66.5,Unemp_Rate:5.3,M2_Vel:1.84},
{date:"11/1/1989",Con_Sent:90.9,Civ_Part:66.6,Unemp_Rate:5.4,M2_Vel:1.84},
{date:"12/1/1989",Con_Sent:90.5,Civ_Part:66.5,Unemp_Rate:5.4,M2_Vel:1.84},
{date:"1/1/1990",Con_Sent:93,Civ_Part:66.8,Unemp_Rate:5.4,M2_Vel:1.853},
{date:"2/1/1990",Con_Sent:89.5,Civ_Part:66.7,Unemp_Rate:5.3,M2_Vel:1.853},
{date:"3/1/1990",Con_Sent:91.3,Civ_Part:66.7,Unemp_Rate:5.2,M2_Vel:1.853},
{date:"4/1/1990",Con_Sent:93.9,Civ_Part:66.6,Unemp_Rate:5.4,M2_Vel:1.864},
{date:"5/1/1990",Con_Sent:90.6,Civ_Part:66.6,Unemp_Rate:5.4,M2_Vel:1.864},
{date:"6/1/1990",Con_Sent:88.3,Civ_Part:66.4,Unemp_Rate:5.2,M2_Vel:1.864},
{date:"7/1/1990",Con_Sent:88.2,Civ_Part:66.5,Unemp_Rate:5.5,M2_Vel:1.861},
{date:"8/1/1990",Con_Sent:76.4,Civ_Part:66.5,Unemp_Rate:5.7,M2_Vel:1.861},
{date:"9/1/1990",Con_Sent:72.8,Civ_Part:66.4,Unemp_Rate:5.9,M2_Vel:1.861},
{date:"10/1/1990",Con_Sent:63.9,Civ_Part:66.4,Unemp_Rate:5.9,M2_Vel:1.846},
{date:"11/1/1990",Con_Sent:66,Civ_Part:66.4,Unemp_Rate:6.2,M2_Vel:1.846},
{date:"12/1/1990",Con_Sent:65.5,Civ_Part:66.4,Unemp_Rate:6.3,M2_Vel:1.846},
{date:"1/1/1991",Con_Sent:66.8,Civ_Part:66.2,Unemp_Rate:6.4,M2_Vel:1.833},
{date:"2/1/1991",Con_Sent:70.4,Civ_Part:66.2,Unemp_Rate:6.6,M2_Vel:1.833},
{date:"3/1/1991",Con_Sent:87.7,Civ_Part:66.3,Unemp_Rate:6.8,M2_Vel:1.833},
{date:"4/1/1991",Con_Sent:81.8,Civ_Part:66.4,Unemp_Rate:6.7,M2_Vel:1.839},
{date:"5/1/1991",Con_Sent:78.3,Civ_Part:66.2,Unemp_Rate:6.9,M2_Vel:1.839},
{date:"6/1/1991",Con_Sent:82.1,Civ_Part:66.2,Unemp_Rate:6.9,M2_Vel:1.839},
{date:"7/1/1991",Con_Sent:82.9,Civ_Part:66.1,Unemp_Rate:6.8,M2_Vel:1.854},
{date:"8/1/1991",Con_Sent:82,Civ_Part:66,Unemp_Rate:6.9,M2_Vel:1.854},
{date:"9/1/1991",Con_Sent:83,Civ_Part:66.2,Unemp_Rate:6.9,M2_Vel:1.854},
{date:"10/1/1991",Con_Sent:78.3,Civ_Part:66.1,Unemp_Rate:7,M2_Vel:1.867},
{date:"11/1/1991",Con_Sent:69.1,Civ_Part:66.1,Unemp_Rate:7,M2_Vel:1.867},
{date:"12/1/1991",Con_Sent:68.2,Civ_Part:66,Unemp_Rate:7.3,M2_Vel:1.867},
{date:"1/1/1992",Con_Sent:67.5,Civ_Part:66.3,Unemp_Rate:7.3,M2_Vel:1.881},
{date:"2/1/1992",Con_Sent:68.8,Civ_Part:66.2,Unemp_Rate:7.4,M2_Vel:1.881},
{date:"3/1/1992",Con_Sent:76,Civ_Part:66.4,Unemp_Rate:7.4,M2_Vel:1.881},
{date:"4/1/1992",Con_Sent:77.2,Civ_Part:66.5,Unemp_Rate:7.4,M2_Vel:1.913},
{date:"5/1/1992",Con_Sent:79.2,Civ_Part:66.6,Unemp_Rate:7.6,M2_Vel:1.913},
{date:"6/1/1992",Con_Sent:80.4,Civ_Part:66.7,Unemp_Rate:7.8,M2_Vel:1.913},
{date:"7/1/1992",Con_Sent:76.6,Civ_Part:66.7,Unemp_Rate:7.7,M2_Vel:1.938},
{date:"8/1/1992",Con_Sent:76.1,Civ_Part:66.6,Unemp_Rate:7.6,M2_Vel:1.938},
{date:"9/1/1992",Con_Sent:75.6,Civ_Part:66.5,Unemp_Rate:7.6,M2_Vel:1.938},
{date:"10/1/1992",Con_Sent:73.3,Civ_Part:66.2,Unemp_Rate:7.3,M2_Vel:1.957},
{date:"11/1/1992",Con_Sent:85.3,Civ_Part:66.3,Unemp_Rate:7.4,M2_Vel:1.957},
{date:"12/1/1992",Con_Sent:91,Civ_Part:66.3,Unemp_Rate:7.4,M2_Vel:1.957},
{date:"1/1/1993",Con_Sent:89.3,Civ_Part:66.2,Unemp_Rate:7.3,M2_Vel:1.978},
{date:"2/1/1993",Con_Sent:86.6,Civ_Part:66.2,Unemp_Rate:7.1,M2_Vel:1.978},
{date:"3/1/1993",Con_Sent:85.9,Civ_Part:66.2,Unemp_Rate:7,M2_Vel:1.978},
{date:"4/1/1993",Con_Sent:85.6,Civ_Part:66.1,Unemp_Rate:7.1,M2_Vel:1.993},
{date:"5/1/1993",Con_Sent:80.3,Civ_Part:66.4,Unemp_Rate:7.1,M2_Vel:1.993},
{date:"6/1/1993",Con_Sent:81.5,Civ_Part:66.5,Unemp_Rate:7,M2_Vel:1.993},
{date:"7/1/1993",Con_Sent:77,Civ_Part:66.4,Unemp_Rate:6.9,M2_Vel:2.005},
{date:"8/1/1993",Con_Sent:77.3,Civ_Part:66.4,Unemp_Rate:6.8,M2_Vel:2.005},
{date:"9/1/1993",Con_Sent:77.9,Civ_Part:66.2,Unemp_Rate:6.7,M2_Vel:2.005},
{date:"10/1/1993",Con_Sent:82.7,Civ_Part:66.3,Unemp_Rate:6.8,M2_Vel:2.03},
{date:"11/1/1993",Con_Sent:81.2,Civ_Part:66.3,Unemp_Rate:6.6,M2_Vel:2.03},
{date:"12/1/1993",Con_Sent:88.2,Civ_Part:66.4,Unemp_Rate:6.5,M2_Vel:2.03},
{date:"1/1/1994",Con_Sent:94.3,Civ_Part:66.6,Unemp_Rate:6.6,M2_Vel:2.055},
{date:"2/1/1994",Con_Sent:93.2,Civ_Part:66.6,Unemp_Rate:6.6,M2_Vel:2.055},
{date:"3/1/1994",Con_Sent:91.5,Civ_Part:66.5,Unemp_Rate:6.5,M2_Vel:2.055},
{date:"4/1/1994",Con_Sent:92.6,Civ_Part:66.5,Unemp_Rate:6.4,M2_Vel:2.089},
{date:"5/1/1994",Con_Sent:92.8,Civ_Part:66.6,Unemp_Rate:6.1,M2_Vel:2.089},
{date:"6/1/1994",Con_Sent:91.2,Civ_Part:66.4,Unemp_Rate:6.1,M2_Vel:2.089},
{date:"7/1/1994",Con_Sent:89,Civ_Part:66.4,Unemp_Rate:6.1,M2_Vel:2.111},
{date:"8/1/1994",Con_Sent:91.7,Civ_Part:66.6,Unemp_Rate:6,M2_Vel:2.111},
{date:"9/1/1994",Con_Sent:91.5,Civ_Part:66.6,Unemp_Rate:5.9,M2_Vel:2.111},
{date:"10/1/1994",Con_Sent:92.7,Civ_Part:66.7,Unemp_Rate:5.8,M2_Vel:2.148},
{date:"11/1/1994",Con_Sent:91.6,Civ_Part:66.7,Unemp_Rate:5.6,M2_Vel:2.148},
{date:"12/1/1994",Con_Sent:95.1,Civ_Part:66.7,Unemp_Rate:5.5,M2_Vel:2.148},
{date:"1/1/1995",Con_Sent:97.6,Civ_Part:66.8,Unemp_Rate:5.6,M2_Vel:2.165},
{date:"2/1/1995",Con_Sent:95.1,Civ_Part:66.8,Unemp_Rate:5.4,M2_Vel:2.165},
{date:"3/1/1995",Con_Sent:90.3,Civ_Part:66.7,Unemp_Rate:5.4,M2_Vel:2.165},
{date:"4/1/1995",Con_Sent:92.5,Civ_Part:66.9,Unemp_Rate:5.8,M2_Vel:2.162},
{date:"5/1/1995",Con_Sent:89.8,Civ_Part:66.5,Unemp_Rate:5.6,M2_Vel:2.162},
{date:"6/1/1995",Con_Sent:92.7,Civ_Part:66.5,Unemp_Rate:5.6,M2_Vel:2.162},
{date:"7/1/1995",Con_Sent:94.4,Civ_Part:66.6,Unemp_Rate:5.7,M2_Vel:2.153},
{date:"8/1/1995",Con_Sent:96.2,Civ_Part:66.6,Unemp_Rate:5.7,M2_Vel:2.153},
{date:"9/1/1995",Con_Sent:88.9,Civ_Part:66.6,Unemp_Rate:5.6,M2_Vel:2.153},
{date:"10/1/1995",Con_Sent:90.2,Civ_Part:66.6,Unemp_Rate:5.5,M2_Vel:2.158},
{date:"11/1/1995",Con_Sent:88.2,Civ_Part:66.5,Unemp_Rate:5.6,M2_Vel:2.158},
{date:"12/1/1995",Con_Sent:91,Civ_Part:66.4,Unemp_Rate:5.6,M2_Vel:2.158},
{date:"1/1/1996",Con_Sent:89.3,Civ_Part:66.4,Unemp_Rate:5.6,M2_Vel:2.157},
{date:"2/1/1996",Con_Sent:88.5,Civ_Part:66.6,Unemp_Rate:5.5,M2_Vel:2.157},
{date:"3/1/1996",Con_Sent:93.7,Civ_Part:66.6,Unemp_Rate:5.5,M2_Vel:2.157},
{date:"4/1/1996",Con_Sent:92.7,Civ_Part:66.7,Unemp_Rate:5.6,M2_Vel:2.177},
{date:"5/1/1996",Con_Sent:89.4,Civ_Part:66.7,Unemp_Rate:5.6,M2_Vel:2.177},
{date:"6/1/1996",Con_Sent:92.4,Civ_Part:66.7,Unemp_Rate:5.3,M2_Vel:2.177},
{date:"7/1/1996",Con_Sent:94.7,Civ_Part:66.9,Unemp_Rate:5.5,M2_Vel:2.183},
{date:"8/1/1996",Con_Sent:95.3,Civ_Part:66.7,Unemp_Rate:5.1,M2_Vel:2.183},
{date:"9/1/1996",Con_Sent:94.7,Civ_Part:66.9,Unemp_Rate:5.2,M2_Vel:2.183},
{date:"10/1/1996",Con_Sent:96.5,Civ_Part:67,Unemp_Rate:5.2,M2_Vel:2.191},
{date:"11/1/1996",Con_Sent:99.2,Civ_Part:67,Unemp_Rate:5.4,M2_Vel:2.191},
{date:"12/1/1996",Con_Sent:96.9,Civ_Part:67,Unemp_Rate:5.4,M2_Vel:2.191},
{date:"1/1/1997",Con_Sent:97.4,Civ_Part:67,Unemp_Rate:5.3,M2_Vel:2.194},
{date:"2/1/1997",Con_Sent:99.7,Civ_Part:66.9,Unemp_Rate:5.2,M2_Vel:2.194},
{date:"3/1/1997",Con_Sent:100,Civ_Part:67.1,Unemp_Rate:5.2,M2_Vel:2.194},
{date:"4/1/1997",Con_Sent:101.4,Civ_Part:67.1,Unemp_Rate:5.1,M2_Vel:2.209},
{date:"5/1/1997",Con_Sent:103.2,Civ_Part:67.1,Unemp_Rate:4.9,M2_Vel:2.209},
{date:"6/1/1997",Con_Sent:104.5,Civ_Part:67.1,Unemp_Rate:5,M2_Vel:2.209},
{date:"7/1/1997",Con_Sent:107.1,Civ_Part:67.2,Unemp_Rate:4.9,M2_Vel:2.21},
{date:"8/1/1997",Con_Sent:104.4,Civ_Part:67.2,Unemp_Rate:4.8,M2_Vel:2.21},
{date:"9/1/1997",Con_Sent:106,Civ_Part:67.1,Unemp_Rate:4.9,M2_Vel:2.21},
{date:"10/1/1997",Con_Sent:105.6,Civ_Part:67.1,Unemp_Rate:4.7,M2_Vel:2.2},
{date:"11/1/1997",Con_Sent:107.2,Civ_Part:67.2,Unemp_Rate:4.6,M2_Vel:2.2},
{date:"12/1/1997",Con_Sent:102.1,Civ_Part:67.2,Unemp_Rate:4.7,M2_Vel:2.2},
{date:"1/1/1998",Con_Sent:106.6,Civ_Part:67.1,Unemp_Rate:4.6,M2_Vel:2.186},
{date:"2/1/1998",Con_Sent:110.4,Civ_Part:67.1,Unemp_Rate:4.6,M2_Vel:2.186},
{date:"3/1/1998",Con_Sent:106.5,Civ_Part:67.1,Unemp_Rate:4.7,M2_Vel:2.186},
{date:"4/1/1998",Con_Sent:108.7,Civ_Part:67,Unemp_Rate:4.3,M2_Vel:2.171},
{date:"5/1/1998",Con_Sent:106.5,Civ_Part:67,Unemp_Rate:4.4,M2_Vel:2.171},
{date:"6/1/1998",Con_Sent:105.6,Civ_Part:67,Unemp_Rate:4.5,M2_Vel:2.171},
{date:"7/1/1998",Con_Sent:105.2,Civ_Part:67,Unemp_Rate:4.5,M2_Vel:2.171},
{date:"8/1/1998",Con_Sent:104.4,Civ_Part:67,Unemp_Rate:4.5,M2_Vel:2.171},
{date:"9/1/1998",Con_Sent:100.9,Civ_Part:67.2,Unemp_Rate:4.6,M2_Vel:2.171},
{date:"10/1/1998",Con_Sent:97.4,Civ_Part:67.2,Unemp_Rate:4.5,M2_Vel:2.158},
{date:"11/1/1998",Con_Sent:102.7,Civ_Part:67.1,Unemp_Rate:4.4,M2_Vel:2.158},
{date:"12/1/1998",Con_Sent:100.5,Civ_Part:67.2,Unemp_Rate:4.4,M2_Vel:2.158},
{date:"1/1/1999",Con_Sent:103.9,Civ_Part:67.2,Unemp_Rate:4.3,M2_Vel:2.148},
{date:"2/1/1999",Con_Sent:108.1,Civ_Part:67.2,Unemp_Rate:4.4,M2_Vel:2.148},
{date:"3/1/1999",Con_Sent:105.7,Civ_Part:67,Unemp_Rate:4.2,M2_Vel:2.148},
{date:"4/1/1999",Con_Sent:104.6,Civ_Part:67.1,Unemp_Rate:4.3,M2_Vel:2.142},
{date:"5/1/1999",Con_Sent:106.8,Civ_Part:67.1,Unemp_Rate:4.2,M2_Vel:2.142},
{date:"6/1/1999",Con_Sent:107.3,Civ_Part:67.1,Unemp_Rate:4.3,M2_Vel:2.142},
{date:"7/1/1999",Con_Sent:106,Civ_Part:67.1,Unemp_Rate:4.3,M2_Vel:2.145},
{date:"8/1/1999",Con_Sent:104.5,Civ_Part:67,Unemp_Rate:4.2,M2_Vel:2.145},
{date:"9/1/1999",Con_Sent:107.2,Civ_Part:67,Unemp_Rate:4.2,M2_Vel:2.145},
{date:"10/1/1999",Con_Sent:103.2,Civ_Part:67,Unemp_Rate:4.1,M2_Vel:2.163},
{date:"11/1/1999",Con_Sent:107.2,Civ_Part:67.1,Unemp_Rate:4.1,M2_Vel:2.163},
{date:"12/1/1999",Con_Sent:105.4,Civ_Part:67.1,Unemp_Rate:4,M2_Vel:2.163},
{date:"1/1/2000",Con_Sent:112,Civ_Part:67.3,Unemp_Rate:4,M2_Vel:2.152},
{date:"2/1/2000",Con_Sent:111.3,Civ_Part:67.3,Unemp_Rate:4.1,M2_Vel:2.152},
{date:"3/1/2000",Con_Sent:107.1,Civ_Part:67.3,Unemp_Rate:4,M2_Vel:2.152},
{date:"4/1/2000",Con_Sent:109.2,Civ_Part:67.3,Unemp_Rate:3.8,M2_Vel:2.169},
{date:"5/1/2000",Con_Sent:110.7,Civ_Part:67.1,Unemp_Rate:4,M2_Vel:2.169},
{date:"6/1/2000",Con_Sent:106.4,Civ_Part:67.1,Unemp_Rate:4,M2_Vel:2.169},
{date:"7/1/2000",Con_Sent:108.3,Civ_Part:66.9,Unemp_Rate:4,M2_Vel:2.16},
{date:"8/1/2000",Con_Sent:107.3,Civ_Part:66.9,Unemp_Rate:4.1,M2_Vel:2.16},
{date:"9/1/2000",Con_Sent:106.8,Civ_Part:66.9,Unemp_Rate:3.9,M2_Vel:2.16},
{date:"10/1/2000",Con_Sent:105.8,Civ_Part:66.8,Unemp_Rate:3.9,M2_Vel:2.152},
{date:"11/1/2000",Con_Sent:107.6,Civ_Part:66.9,Unemp_Rate:3.9,M2_Vel:2.152},
{date:"12/1/2000",Con_Sent:98.4,Civ_Part:67,Unemp_Rate:3.9,M2_Vel:2.152},
{date:"1/1/2001",Con_Sent:94.7,Civ_Part:67.2,Unemp_Rate:4.2,M2_Vel:2.105},
{date:"2/1/2001",Con_Sent:90.6,Civ_Part:67.1,Unemp_Rate:4.2,M2_Vel:2.105},
{date:"3/1/2001",Con_Sent:91.5,Civ_Part:67.2,Unemp_Rate:4.3,M2_Vel:2.105},
{date:"4/1/2001",Con_Sent:88.4,Civ_Part:66.9,Unemp_Rate:4.4,M2_Vel:2.079},
{date:"5/1/2001",Con_Sent:92,Civ_Part:66.7,Unemp_Rate:4.3,M2_Vel:2.079},
{date:"6/1/2001",Con_Sent:92.6,Civ_Part:66.7,Unemp_Rate:4.5,M2_Vel:2.079},
{date:"7/1/2001",Con_Sent:92.4,Civ_Part:66.8,Unemp_Rate:4.6,M2_Vel:2.033},
{date:"8/1/2001",Con_Sent:91.5,Civ_Part:66.5,Unemp_Rate:4.9,M2_Vel:2.033},
{date:"9/1/2001",Con_Sent:81.8,Civ_Part:66.8,Unemp_Rate:5,M2_Vel:2.033},
{date:"10/1/2001",Con_Sent:82.7,Civ_Part:66.7,Unemp_Rate:5.3,M2_Vel:2},
{date:"11/1/2001",Con_Sent:83.9,Civ_Part:66.7,Unemp_Rate:5.5,M2_Vel:2},
{date:"12/1/2001",Con_Sent:88.8,Civ_Part:66.7,Unemp_Rate:5.7,M2_Vel:2},
{date:"1/1/2002",Con_Sent:93,Civ_Part:66.5,Unemp_Rate:5.7,M2_Vel:1.99},
{date:"2/1/2002",Con_Sent:90.7,Civ_Part:66.8,Unemp_Rate:5.7,M2_Vel:1.99},
{date:"3/1/2002",Con_Sent:95.7,Civ_Part:66.6,Unemp_Rate:5.7,M2_Vel:1.99},
{date:"4/1/2002",Con_Sent:93,Civ_Part:66.7,Unemp_Rate:5.9,M2_Vel:1.993},
{date:"5/1/2002",Con_Sent:96.9,Civ_Part:66.7,Unemp_Rate:5.8,M2_Vel:1.993},
{date:"6/1/2002",Con_Sent:92.4,Civ_Part:66.6,Unemp_Rate:5.8,M2_Vel:1.993},
{date:"7/1/2002",Con_Sent:88.1,Civ_Part:66.5,Unemp_Rate:5.8,M2_Vel:1.974},
{date:"8/1/2002",Con_Sent:87.6,Civ_Part:66.6,Unemp_Rate:5.7,M2_Vel:1.974},
{date:"9/1/2002",Con_Sent:86.1,Civ_Part:66.7,Unemp_Rate:5.7,M2_Vel:1.974},
{date:"10/1/2002",Con_Sent:80.6,Civ_Part:66.6,Unemp_Rate:5.7,M2_Vel:1.946},
{date:"11/1/2002",Con_Sent:84.2,Civ_Part:66.4,Unemp_Rate:5.9,M2_Vel:1.946},
{date:"12/1/2002",Con_Sent:86.7,Civ_Part:66.3,Unemp_Rate:6,M2_Vel:1.946},
{date:"1/1/2003",Con_Sent:82.4,Civ_Part:66.4,Unemp_Rate:5.8,M2_Vel:1.936},
{date:"2/1/2003",Con_Sent:79.9,Civ_Part:66.4,Unemp_Rate:5.9,M2_Vel:1.936},
{date:"3/1/2003",Con_Sent:77.6,Civ_Part:66.3,Unemp_Rate:5.9,M2_Vel:1.936},
{date:"4/1/2003",Con_Sent:86,Civ_Part:66.4,Unemp_Rate:6,M2_Vel:1.922},
{date:"5/1/2003",Con_Sent:92.1,Civ_Part:66.4,Unemp_Rate:6.1,M2_Vel:1.922},
{date:"6/1/2003",Con_Sent:89.7,Civ_Part:66.5,Unemp_Rate:6.3,M2_Vel:1.922},
{date:"7/1/2003",Con_Sent:90.9,Civ_Part:66.2,Unemp_Rate:6.2,M2_Vel:1.926},
{date:"8/1/2003",Con_Sent:89.3,Civ_Part:66.1,Unemp_Rate:6.1,M2_Vel:1.926},
{date:"9/1/2003",Con_Sent:87.7,Civ_Part:66.1,Unemp_Rate:6.1,M2_Vel:1.926},
{date:"10/1/2003",Con_Sent:89.6,Civ_Part:66.1,Unemp_Rate:6,M2_Vel:1.959},
{date:"11/1/2003",Con_Sent:93.7,Civ_Part:66.1,Unemp_Rate:5.8,M2_Vel:1.959},
{date:"12/1/2003",Con_Sent:92.6,Civ_Part:65.9,Unemp_Rate:5.7,M2_Vel:1.959},
{date:"1/1/2004",Con_Sent:103.8,Civ_Part:66.1,Unemp_Rate:5.7,M2_Vel:1.972},
{date:"2/1/2004",Con_Sent:94.4,Civ_Part:66,Unemp_Rate:5.6,M2_Vel:1.972},
{date:"3/1/2004",Con_Sent:95.8,Civ_Part:66,Unemp_Rate:5.8,M2_Vel:1.972},
{date:"4/1/2004",Con_Sent:94.2,Civ_Part:65.9,Unemp_Rate:5.6,M2_Vel:1.962},
{date:"5/1/2004",Con_Sent:90.2,Civ_Part:66,Unemp_Rate:5.6,M2_Vel:1.962},
{date:"6/1/2004",Con_Sent:95.6,Civ_Part:66.1,Unemp_Rate:5.6,M2_Vel:1.962},
{date:"7/1/2004",Con_Sent:96.7,Civ_Part:66.1,Unemp_Rate:5.5,M2_Vel:1.97},
{date:"8/1/2004",Con_Sent:95.9,Civ_Part:66,Unemp_Rate:5.4,M2_Vel:1.97},
{date:"9/1/2004",Con_Sent:94.2,Civ_Part:65.8,Unemp_Rate:5.4,M2_Vel:1.97},
{date:"10/1/2004",Con_Sent:91.7,Civ_Part:65.9,Unemp_Rate:5.5,M2_Vel:1.975},
{date:"11/1/2004",Con_Sent:92.8,Civ_Part:66,Unemp_Rate:5.4,M2_Vel:1.975},
{date:"12/1/2004",Con_Sent:97.1,Civ_Part:65.9,Unemp_Rate:5.4,M2_Vel:1.975},
{date:"1/1/2005",Con_Sent:95.5,Civ_Part:65.8,Unemp_Rate:5.3,M2_Vel:2.002},
{date:"2/1/2005",Con_Sent:94.1,Civ_Part:65.9,Unemp_Rate:5.4,M2_Vel:2.002},
{date:"3/1/2005",Con_Sent:92.6,Civ_Part:65.9,Unemp_Rate:5.2,M2_Vel:2.002},
{date:"4/1/2005",Con_Sent:87.7,Civ_Part:66.1,Unemp_Rate:5.2,M2_Vel:2.014},
{date:"5/1/2005",Con_Sent:86.9,Civ_Part:66.1,Unemp_Rate:5.1,M2_Vel:2.014},
{date:"6/1/2005",Con_Sent:96,Civ_Part:66.1,Unemp_Rate:5,M2_Vel:2.014},
{date:"7/1/2005",Con_Sent:96.5,Civ_Part:66.1,Unemp_Rate:5,M2_Vel:2.021},
{date:"8/1/2005",Con_Sent:89.1,Civ_Part:66.2,Unemp_Rate:4.9,M2_Vel:2.021},
{date:"9/1/2005",Con_Sent:76.9,Civ_Part:66.1,Unemp_Rate:5,M2_Vel:2.021},
{date:"10/1/2005",Con_Sent:74.2,Civ_Part:66.1,Unemp_Rate:5,M2_Vel:2.02},
{date:"11/1/2005",Con_Sent:81.6,Civ_Part:66,Unemp_Rate:5,M2_Vel:2.02},
{date:"12/1/2005",Con_Sent:91.5,Civ_Part:66,Unemp_Rate:4.9,M2_Vel:2.02},
{date:"1/1/2006",Con_Sent:91.2,Civ_Part:66,Unemp_Rate:4.7,M2_Vel:2.034},
{date:"2/1/2006",Con_Sent:86.7,Civ_Part:66.1,Unemp_Rate:4.8,M2_Vel:2.034},
{date:"3/1/2006",Con_Sent:88.9,Civ_Part:66.2,Unemp_Rate:4.7,M2_Vel:2.034},
{date:"4/1/2006",Con_Sent:87.4,Civ_Part:66.1,Unemp_Rate:4.7,M2_Vel:2.035},
{date:"5/1/2006",Con_Sent:79.1,Civ_Part:66.1,Unemp_Rate:4.6,M2_Vel:2.035},
{date:"6/1/2006",Con_Sent:84.9,Civ_Part:66.2,Unemp_Rate:4.6,M2_Vel:2.035},
{date:"7/1/2006",Con_Sent:84.7,Civ_Part:66.1,Unemp_Rate:4.7,M2_Vel:2.022},
{date:"8/1/2006",Con_Sent:82,Civ_Part:66.2,Unemp_Rate:4.7,M2_Vel:2.022},
{date:"9/1/2006",Con_Sent:85.4,Civ_Part:66.1,Unemp_Rate:4.5,M2_Vel:2.022},
{date:"10/1/2006",Con_Sent:93.6,Civ_Part:66.2,Unemp_Rate:4.4,M2_Vel:2.011},
{date:"11/1/2006",Con_Sent:92.1,Civ_Part:66.3,Unemp_Rate:4.5,M2_Vel:2.011},
{date:"12/1/2006",Con_Sent:91.7,Civ_Part:66.4,Unemp_Rate:4.4,M2_Vel:2.011},
{date:"1/1/2007",Con_Sent:96.9,Civ_Part:66.4,Unemp_Rate:4.6,M2_Vel:2.006},
{date:"2/1/2007",Con_Sent:91.3,Civ_Part:66.3,Unemp_Rate:4.5,M2_Vel:2.006},
{date:"3/1/2007",Con_Sent:88.4,Civ_Part:66.2,Unemp_Rate:4.4,M2_Vel:2.006},
{date:"4/1/2007",Con_Sent:87.1,Civ_Part:65.9,Unemp_Rate:4.5,M2_Vel:1.999},
{date:"5/1/2007",Con_Sent:88.3,Civ_Part:66,Unemp_Rate:4.4,M2_Vel:1.999},
{date:"6/1/2007",Con_Sent:85.3,Civ_Part:66,Unemp_Rate:4.6,M2_Vel:1.999},
{date:"7/1/2007",Con_Sent:90.4,Civ_Part:66,Unemp_Rate:4.7,M2_Vel:1.988},
{date:"8/1/2007",Con_Sent:83.4,Civ_Part:65.8,Unemp_Rate:4.6,M2_Vel:1.988},
{date:"9/1/2007",Con_Sent:83.4,Civ_Part:66,Unemp_Rate:4.7,M2_Vel:1.988},
{date:"10/1/2007",Con_Sent:80.9,Civ_Part:65.8,Unemp_Rate:4.7,M2_Vel:1.983},
{date:"11/1/2007",Con_Sent:76.1,Civ_Part:66,Unemp_Rate:4.7,M2_Vel:1.983},
{date:"12/1/2007",Con_Sent:75.5,Civ_Part:66,Unemp_Rate:5,M2_Vel:1.983},
{date:"1/1/2008",Con_Sent:78.4,Civ_Part:66.2,Unemp_Rate:5,M2_Vel:1.943},
{date:"2/1/2008",Con_Sent:70.8,Civ_Part:66,Unemp_Rate:4.9,M2_Vel:1.943},
{date:"3/1/2008",Con_Sent:69.5,Civ_Part:66.1,Unemp_Rate:5.1,M2_Vel:1.943},
{date:"4/1/2008",Con_Sent:62.6,Civ_Part:65.9,Unemp_Rate:5,M2_Vel:1.929},
{date:"5/1/2008",Con_Sent:59.8,Civ_Part:66.1,Unemp_Rate:5.4,M2_Vel:1.929},
{date:"6/1/2008",Con_Sent:56.4,Civ_Part:66.1,Unemp_Rate:5.6,M2_Vel:1.929},
{date:"7/1/2008",Con_Sent:61.2,Civ_Part:66.1,Unemp_Rate:5.8,M2_Vel:1.91},
{date:"8/1/2008",Con_Sent:63,Civ_Part:66.1,Unemp_Rate:6.1,M2_Vel:1.91},
{date:"9/1/2008",Con_Sent:70.3,Civ_Part:66,Unemp_Rate:6.1,M2_Vel:1.91},
{date:"10/1/2008",Con_Sent:57.6,Civ_Part:66,Unemp_Rate:6.5,M2_Vel:1.814},
{date:"11/1/2008",Con_Sent:55.3,Civ_Part:65.9,Unemp_Rate:6.8,M2_Vel:1.814},
{date:"12/1/2008",Con_Sent:60.1,Civ_Part:65.8,Unemp_Rate:7.3,M2_Vel:1.814},
{date:"1/1/2009",Con_Sent:61.2,Civ_Part:65.7,Unemp_Rate:7.8,M2_Vel:1.737},
{date:"2/1/2009",Con_Sent:56.3,Civ_Part:65.8,Unemp_Rate:8.3,M2_Vel:1.737},
{date:"3/1/2009",Con_Sent:57.3,Civ_Part:65.6,Unemp_Rate:8.7,M2_Vel:1.737},
{date:"4/1/2009",Con_Sent:65.1,Civ_Part:65.7,Unemp_Rate:9,M2_Vel:1.711},
{date:"5/1/2009",Con_Sent:68.7,Civ_Part:65.7,Unemp_Rate:9.4,M2_Vel:1.711},
{date:"6/1/2009",Con_Sent:70.8,Civ_Part:65.7,Unemp_Rate:9.5,M2_Vel:1.711},
{date:"7/1/2009",Con_Sent:66,Civ_Part:65.5,Unemp_Rate:9.5,M2_Vel:1.712},
{date:"8/1/2009",Con_Sent:65.7,Civ_Part:65.4,Unemp_Rate:9.6,M2_Vel:1.712},
{date:"9/1/2009",Con_Sent:73.5,Civ_Part:65.1,Unemp_Rate:9.8,M2_Vel:1.712},
{date:"10/1/2009",Con_Sent:70.6,Civ_Part:65,Unemp_Rate:10,M2_Vel:1.724},
{date:"11/1/2009",Con_Sent:67.4,Civ_Part:65,Unemp_Rate:9.9,M2_Vel:1.724},
{date:"12/1/2009",Con_Sent:72.5,Civ_Part:64.6,Unemp_Rate:9.9,M2_Vel:1.724},
{date:"1/1/2010",Con_Sent:74.4,Civ_Part:64.8,Unemp_Rate:9.8,M2_Vel:1.736},
{date:"2/1/2010",Con_Sent:73.6,Civ_Part:64.9,Unemp_Rate:9.8,M2_Vel:1.736},
{date:"3/1/2010",Con_Sent:73.6,Civ_Part:64.9,Unemp_Rate:9.9,M2_Vel:1.736},
{date:"4/1/2010",Con_Sent:72.2,Civ_Part:65.2,Unemp_Rate:9.9,M2_Vel:1.742},
{date:"5/1/2010",Con_Sent:73.6,Civ_Part:64.9,Unemp_Rate:9.6,M2_Vel:1.742},
{date:"6/1/2010",Con_Sent:76,Civ_Part:64.6,Unemp_Rate:9.4,M2_Vel:1.742},
{date:"7/1/2010",Con_Sent:67.8,Civ_Part:64.6,Unemp_Rate:9.4,M2_Vel:1.747},
{date:"8/1/2010",Con_Sent:68.9,Civ_Part:64.7,Unemp_Rate:9.5,M2_Vel:1.747},
{date:"9/1/2010",Con_Sent:68.2,Civ_Part:64.6,Unemp_Rate:9.5,M2_Vel:1.747},
{date:"10/1/2010",Con_Sent:67.7,Civ_Part:64.4,Unemp_Rate:9.4,M2_Vel:1.744},
{date:"11/1/2010",Con_Sent:71.6,Civ_Part:64.6,Unemp_Rate:9.8,M2_Vel:1.744},
{date:"12/1/2010",Con_Sent:74.5,Civ_Part:64.3,Unemp_Rate:9.3,M2_Vel:1.744},
{date:"1/1/2011",Con_Sent:74.2,Civ_Part:64.2,Unemp_Rate:9.1,M2_Vel:1.721},
{date:"2/1/2011",Con_Sent:77.5,Civ_Part:64.1,Unemp_Rate:9,M2_Vel:1.721},
{date:"3/1/2011",Con_Sent:67.5,Civ_Part:64.2,Unemp_Rate:9,M2_Vel:1.721},
{date:"4/1/2011",Con_Sent:69.8,Civ_Part:64.2,Unemp_Rate:9.1,M2_Vel:1.713},
{date:"5/1/2011",Con_Sent:74.3,Civ_Part:64.1,Unemp_Rate:9,M2_Vel:1.713},
{date:"6/1/2011",Con_Sent:71.5,Civ_Part:64,Unemp_Rate:9.1,M2_Vel:1.713},
{date:"7/1/2011",Con_Sent:63.7,Civ_Part:64,Unemp_Rate:9,M2_Vel:1.654},
{date:"8/1/2011",Con_Sent:55.8,Civ_Part:64.1,Unemp_Rate:9,M2_Vel:1.654},
{date:"9/1/2011",Con_Sent:59.5,Civ_Part:64.2,Unemp_Rate:9,M2_Vel:1.654},
{date:"10/1/2011",Con_Sent:60.8,Civ_Part:64.1,Unemp_Rate:8.8,M2_Vel:1.647},
{date:"11/1/2011",Con_Sent:63.7,Civ_Part:64.1,Unemp_Rate:8.6,M2_Vel:1.647},
{date:"12/1/2011",Con_Sent:69.9,Civ_Part:64,Unemp_Rate:8.5,M2_Vel:1.647},
{date:"1/1/2012",Con_Sent:75,Civ_Part:63.7,Unemp_Rate:8.3,M2_Vel:1.637},
{date:"2/1/2012",Con_Sent:75.3,Civ_Part:63.8,Unemp_Rate:8.3,M2_Vel:1.637},
{date:"3/1/2012",Con_Sent:76.2,Civ_Part:63.8,Unemp_Rate:8.2,M2_Vel:1.637},
{date:"4/1/2012",Con_Sent:76.4,Civ_Part:63.7,Unemp_Rate:8.2,M2_Vel:1.628},
{date:"5/1/2012",Con_Sent:79.3,Civ_Part:63.7,Unemp_Rate:8.2,M2_Vel:1.628},
{date:"6/1/2012",Con_Sent:73.2,Civ_Part:63.8,Unemp_Rate:8.2,M2_Vel:1.628},
{date:"7/1/2012",Con_Sent:72.3,Civ_Part:63.7,Unemp_Rate:8.2,M2_Vel:1.608},
{date:"8/1/2012",Con_Sent:74.3,Civ_Part:63.5,Unemp_Rate:8.1,M2_Vel:1.608},
{date:"9/1/2012",Con_Sent:78.3,Civ_Part:63.6,Unemp_Rate:7.8,M2_Vel:1.608},
{date:"10/1/2012",Con_Sent:82.6,Civ_Part:63.8,Unemp_Rate:7.8,M2_Vel:1.58},
{date:"11/1/2012",Con_Sent:82.7,Civ_Part:63.6,Unemp_Rate:7.7,M2_Vel:1.58},
{date:"12/1/2012",Con_Sent:72.9,Civ_Part:63.7,Unemp_Rate:7.9,M2_Vel:1.58},
{date:"1/1/2013",Con_Sent:73.8,Civ_Part:63.6,Unemp_Rate:8,M2_Vel:1.572},
{date:"2/1/2013",Con_Sent:77.6,Civ_Part:63.4,Unemp_Rate:7.7,M2_Vel:1.572},
{date:"3/1/2013",Con_Sent:78.6,Civ_Part:63.3,Unemp_Rate:7.5,M2_Vel:1.572},
{date:"4/1/2013",Con_Sent:76.4,Civ_Part:63.4,Unemp_Rate:7.6,M2_Vel:1.56},
{date:"5/1/2013",Con_Sent:84.5,Civ_Part:63.4,Unemp_Rate:7.5,M2_Vel:1.56},
{date:"6/1/2013",Con_Sent:84.1,Civ_Part:63.4,Unemp_Rate:7.5,M2_Vel:1.56},
{date:"7/1/2013",Con_Sent:85.1,Civ_Part:63.3,Unemp_Rate:7.3,M2_Vel:1.558},
{date:"8/1/2013",Con_Sent:82.1,Civ_Part:63.3,Unemp_Rate:7.3,M2_Vel:1.558},
{date:"9/1/2013",Con_Sent:77.5,Civ_Part:63.3,Unemp_Rate:7.2,M2_Vel:1.558},
{date:"10/1/2013",Con_Sent:73.2,Civ_Part:62.8,Unemp_Rate:7.2,M2_Vel:1.554},
{date:"11/1/2013",Con_Sent:75.1,Civ_Part:63,Unemp_Rate:6.9,M2_Vel:1.554},
{date:"12/1/2013",Con_Sent:82.5,Civ_Part:62.9,Unemp_Rate:6.7,M2_Vel:1.554},
{date:"1/1/2014",Con_Sent:81.2,Civ_Part:62.9,Unemp_Rate:6.6,M2_Vel:1.531},
{date:"2/1/2014",Con_Sent:81.6,Civ_Part:62.9,Unemp_Rate:6.7,M2_Vel:1.531},
{date:"3/1/2014",Con_Sent:80,Civ_Part:63.1,Unemp_Rate:6.7,M2_Vel:1.531},
{date:"4/1/2014",Con_Sent:84.1,Civ_Part:62.8,Unemp_Rate:6.2,M2_Vel:1.531},
{date:"5/1/2014",Con_Sent:81.9,Civ_Part:62.8,Unemp_Rate:6.3,M2_Vel:1.531},
{date:"6/1/2014",Con_Sent:82.5,Civ_Part:62.8,Unemp_Rate:6.1,M2_Vel:1.531},
{date:"7/1/2014",Con_Sent:81.8,Civ_Part:62.9,Unemp_Rate:6.2,M2_Vel:1.536},
{date:"8/1/2014",Con_Sent:82.5,Civ_Part:62.9,Unemp_Rate:6.2,M2_Vel:1.536},
{date:"9/1/2014",Con_Sent:84.6,Civ_Part:62.8,Unemp_Rate:5.9,M2_Vel:1.536},
{date:"10/1/2014",Con_Sent:86.9,Civ_Part:62.9,Unemp_Rate:5.7,M2_Vel:1.528},
{date:"11/1/2014",Con_Sent:88.8,Civ_Part:62.9,Unemp_Rate:5.8,M2_Vel:1.528},
{date:"12/1/2014",Con_Sent:93.6,Civ_Part:62.7,Unemp_Rate:5.6,M2_Vel:1.528},
{date:"1/1/2015",Con_Sent:98.1,Civ_Part:62.9,Unemp_Rate:5.7,M2_Vel:1.507},
{date:"2/1/2015",Con_Sent:95.4,Civ_Part:62.7,Unemp_Rate:5.5,M2_Vel:1.507},
{date:"3/1/2015",Con_Sent:93,Civ_Part:62.7,Unemp_Rate:5.4,M2_Vel:1.507},
{date:"4/1/2015",Con_Sent:95.9,Civ_Part:62.8,Unemp_Rate:5.4,M2_Vel:1.508},
{date:"5/1/2015",Con_Sent:90.7,Civ_Part:62.9,Unemp_Rate:5.5,M2_Vel:1.508},
{date:"6/1/2015",Con_Sent:96.1,Civ_Part:62.6,Unemp_Rate:5.3,M2_Vel:1.508},
{date:"7/1/2015",Con_Sent:93.1,Civ_Part:62.6,Unemp_Rate:5.2,M2_Vel:1.501},
{date:"8/1/2015",Con_Sent:91.9,Civ_Part:62.6,Unemp_Rate:5.1,M2_Vel:1.501},
{date:"9/1/2015",Con_Sent:87.2,Civ_Part:62.4,Unemp_Rate:5,M2_Vel:1.501},
{date:"10/1/2015",Con_Sent:90,Civ_Part:62.5,Unemp_Rate:5,M2_Vel:1.489},
{date:"11/1/2015",Con_Sent:91.3,Civ_Part:62.5,Unemp_Rate:5,M2_Vel:1.489},
{date:"12/1/2015",Con_Sent:92.6,Civ_Part:62.7,Unemp_Rate:5,M2_Vel:1.489},
{date:"1/1/2016",Con_Sent:92,Civ_Part:62.7,Unemp_Rate:4.9,M2_Vel:1.461},
{date:"2/1/2016",Con_Sent:91.7,Civ_Part:62.9,Unemp_Rate:4.9,M2_Vel:1.461},
{date:"3/1/2016",Con_Sent:91,Civ_Part:63,Unemp_Rate:5,M2_Vel:1.461},
{date:"4/1/2016",Con_Sent:89,Civ_Part:62.8,Unemp_Rate:5,M2_Vel:1.448},
{date:"5/1/2016",Con_Sent:94.7,Civ_Part:62.6,Unemp_Rate:4.7,M2_Vel:1.448},
{date:"6/1/2016",Con_Sent:93.5,Civ_Part:62.7,Unemp_Rate:4.9,M2_Vel:1.448},
{date:"7/1/2016",Con_Sent:90,Civ_Part:62.8,Unemp_Rate:4.9,M2_Vel:1.442},
{date:"8/1/2016",Con_Sent:89.8,Civ_Part:62.8,Unemp_Rate:4.9,M2_Vel:1.442},
{date:"9/1/2016",Con_Sent:91.2,Civ_Part:62.9,Unemp_Rate:4.9,M2_Vel:1.442},
{date:"10/1/2016",Con_Sent:87.2,Civ_Part:62.8,Unemp_Rate:4.8,M2_Vel:1.437},
{date:"11/1/2016",Con_Sent:93.8,Civ_Part:62.6,Unemp_Rate:4.6,M2_Vel:1.437},
{date:"12/1/2016",Con_Sent:98.2,Civ_Part:62.7,Unemp_Rate:4.7,M2_Vel:1.437},
{date:"1/1/2017",Con_Sent:98.5,Civ_Part:62.9,Unemp_Rate:4.8,M2_Vel:1.429},
{date:"2/1/2017",Con_Sent:96.3,Civ_Part:63,Unemp_Rate:4.7,M2_Vel:1.429},
{date:"3/1/2017",Con_Sent:96.9,Civ_Part:63,Unemp_Rate:4.5,M2_Vel:1.429}
]
