/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 5482.0, "series": [{"data": [[0.0, 0.0], [0.1, 95.0], [0.2, 108.0], [0.3, 120.0], [0.4, 131.0], [0.5, 140.0], [0.6, 150.0], [0.7, 155.0], [0.8, 163.0], [0.9, 169.0], [1.0, 175.0], [1.1, 180.0], [1.2, 185.0], [1.3, 190.0], [1.4, 195.0], [1.5, 199.0], [1.6, 203.0], [1.7, 206.0], [1.8, 210.0], [1.9, 213.0], [2.0, 216.0], [2.1, 220.0], [2.2, 222.0], [2.3, 226.0], [2.4, 229.0], [2.5, 232.0], [2.6, 235.0], [2.7, 238.0], [2.8, 241.0], [2.9, 244.0], [3.0, 247.0], [3.1, 250.0], [3.2, 254.0], [3.3, 257.0], [3.4, 261.0], [3.5, 264.0], [3.6, 267.0], [3.7, 270.0], [3.8, 273.0], [3.9, 275.0], [4.0, 278.0], [4.1, 281.0], [4.2, 285.0], [4.3, 288.0], [4.4, 291.0], [4.5, 294.0], [4.6, 297.0], [4.7, 299.0], [4.8, 302.0], [4.9, 304.0], [5.0, 308.0], [5.1, 311.0], [5.2, 315.0], [5.3, 318.0], [5.4, 321.0], [5.5, 324.0], [5.6, 328.0], [5.7, 331.0], [5.8, 335.0], [5.9, 338.0], [6.0, 341.0], [6.1, 345.0], [6.2, 348.0], [6.3, 353.0], [6.4, 356.0], [6.5, 359.0], [6.6, 364.0], [6.7, 367.0], [6.8, 371.0], [6.9, 375.0], [7.0, 379.0], [7.1, 382.0], [7.2, 385.0], [7.3, 390.0], [7.4, 393.0], [7.5, 397.0], [7.6, 401.0], [7.7, 404.0], [7.8, 407.0], [7.9, 411.0], [8.0, 414.0], [8.1, 418.0], [8.2, 422.0], [8.3, 427.0], [8.4, 432.0], [8.5, 435.0], [8.6, 439.0], [8.7, 443.0], [8.8, 446.0], [8.9, 450.0], [9.0, 454.0], [9.1, 457.0], [9.2, 461.0], [9.3, 465.0], [9.4, 468.0], [9.5, 472.0], [9.6, 475.0], [9.7, 478.0], [9.8, 482.0], [9.9, 485.0], [10.0, 488.0], [10.1, 491.0], [10.2, 493.0], [10.3, 496.0], [10.4, 500.0], [10.5, 502.0], [10.6, 506.0], [10.7, 509.0], [10.8, 513.0], [10.9, 515.0], [11.0, 517.0], [11.1, 520.0], [11.2, 522.0], [11.3, 525.0], [11.4, 527.0], [11.5, 531.0], [11.6, 534.0], [11.7, 537.0], [11.8, 540.0], [11.9, 542.0], [12.0, 545.0], [12.1, 549.0], [12.2, 552.0], [12.3, 555.0], [12.4, 558.0], [12.5, 561.0], [12.6, 564.0], [12.7, 567.0], [12.8, 570.0], [12.9, 572.0], [13.0, 574.0], [13.1, 577.0], [13.2, 580.0], [13.3, 582.0], [13.4, 585.0], [13.5, 588.0], [13.6, 592.0], [13.7, 595.0], [13.8, 598.0], [13.9, 600.0], [14.0, 602.0], [14.1, 605.0], [14.2, 607.0], [14.3, 610.0], [14.4, 613.0], [14.5, 616.0], [14.6, 619.0], [14.7, 622.0], [14.8, 624.0], [14.9, 627.0], [15.0, 630.0], [15.1, 633.0], [15.2, 636.0], [15.3, 639.0], [15.4, 641.0], [15.5, 643.0], [15.6, 646.0], [15.7, 649.0], [15.8, 652.0], [15.9, 654.0], [16.0, 657.0], [16.1, 660.0], [16.2, 662.0], [16.3, 664.0], [16.4, 667.0], [16.5, 670.0], [16.6, 673.0], [16.7, 677.0], [16.8, 680.0], [16.9, 684.0], [17.0, 687.0], [17.1, 690.0], [17.2, 693.0], [17.3, 696.0], [17.4, 701.0], [17.5, 703.0], [17.6, 707.0], [17.7, 710.0], [17.8, 713.0], [17.9, 717.0], [18.0, 720.0], [18.1, 723.0], [18.2, 726.0], [18.3, 728.0], [18.4, 732.0], [18.5, 735.0], [18.6, 739.0], [18.7, 742.0], [18.8, 746.0], [18.9, 750.0], [19.0, 752.0], [19.1, 756.0], [19.2, 760.0], [19.3, 763.0], [19.4, 766.0], [19.5, 770.0], [19.6, 773.0], [19.7, 775.0], [19.8, 778.0], [19.9, 781.0], [20.0, 784.0], [20.1, 787.0], [20.2, 791.0], [20.3, 795.0], [20.4, 797.0], [20.5, 801.0], [20.6, 804.0], [20.7, 807.0], [20.8, 810.0], [20.9, 812.0], [21.0, 814.0], [21.1, 816.0], [21.2, 819.0], [21.3, 822.0], [21.4, 825.0], [21.5, 827.0], [21.6, 829.0], [21.7, 832.0], [21.8, 833.0], [21.9, 836.0], [22.0, 838.0], [22.1, 841.0], [22.2, 843.0], [22.3, 846.0], [22.4, 848.0], [22.5, 851.0], [22.6, 853.0], [22.7, 855.0], [22.8, 857.0], [22.9, 860.0], [23.0, 863.0], [23.1, 866.0], [23.2, 869.0], [23.3, 871.0], [23.4, 872.0], [23.5, 874.0], [23.6, 876.0], [23.7, 878.0], [23.8, 880.0], [23.9, 881.0], [24.0, 884.0], [24.1, 887.0], [24.2, 889.0], [24.3, 890.0], [24.4, 893.0], [24.5, 897.0], [24.6, 900.0], [24.7, 903.0], [24.8, 905.0], [24.9, 908.0], [25.0, 910.0], [25.1, 912.0], [25.2, 914.0], [25.3, 916.0], [25.4, 918.0], [25.5, 920.0], [25.6, 922.0], [25.7, 923.0], [25.8, 926.0], [25.9, 927.0], [26.0, 929.0], [26.1, 931.0], [26.2, 932.0], [26.3, 935.0], [26.4, 936.0], [26.5, 938.0], [26.6, 940.0], [26.7, 942.0], [26.8, 943.0], [26.9, 944.0], [27.0, 946.0], [27.1, 948.0], [27.2, 950.0], [27.3, 951.0], [27.4, 953.0], [27.5, 954.0], [27.6, 955.0], [27.7, 957.0], [27.8, 959.0], [27.9, 960.0], [28.0, 962.0], [28.1, 963.0], [28.2, 964.0], [28.3, 966.0], [28.4, 967.0], [28.5, 968.0], [28.6, 969.0], [28.7, 970.0], [28.8, 971.0], [28.9, 972.0], [29.0, 973.0], [29.1, 974.0], [29.2, 976.0], [29.3, 977.0], [29.4, 978.0], [29.5, 979.0], [29.6, 980.0], [29.7, 981.0], [29.8, 982.0], [29.9, 983.0], [30.0, 984.0], [30.1, 985.0], [30.2, 986.0], [30.3, 987.0], [30.4, 988.0], [30.5, 989.0], [30.6, 990.0], [30.7, 991.0], [30.8, 992.0], [30.9, 992.0], [31.0, 993.0], [31.1, 994.0], [31.2, 995.0], [31.3, 995.0], [31.4, 996.0], [31.5, 997.0], [31.6, 998.0], [31.7, 999.0], [31.8, 1000.0], [31.9, 1000.0], [32.0, 1001.0], [32.1, 1002.0], [32.2, 1003.0], [32.3, 1004.0], [32.4, 1005.0], [32.5, 1005.0], [32.6, 1006.0], [32.7, 1007.0], [32.8, 1007.0], [32.9, 1008.0], [33.0, 1009.0], [33.1, 1010.0], [33.2, 1011.0], [33.3, 1011.0], [33.4, 1012.0], [33.5, 1013.0], [33.6, 1013.0], [33.7, 1014.0], [33.8, 1015.0], [33.9, 1015.0], [34.0, 1016.0], [34.1, 1017.0], [34.2, 1017.0], [34.3, 1018.0], [34.4, 1019.0], [34.5, 1019.0], [34.6, 1020.0], [34.7, 1021.0], [34.8, 1021.0], [34.9, 1022.0], [35.0, 1022.0], [35.1, 1023.0], [35.2, 1024.0], [35.3, 1024.0], [35.4, 1025.0], [35.5, 1025.0], [35.6, 1026.0], [35.7, 1026.0], [35.8, 1027.0], [35.9, 1027.0], [36.0, 1028.0], [36.1, 1029.0], [36.2, 1029.0], [36.3, 1030.0], [36.4, 1030.0], [36.5, 1031.0], [36.6, 1031.0], [36.7, 1032.0], [36.8, 1032.0], [36.9, 1033.0], [37.0, 1034.0], [37.1, 1034.0], [37.2, 1035.0], [37.3, 1035.0], [37.4, 1036.0], [37.5, 1036.0], [37.6, 1037.0], [37.7, 1038.0], [37.8, 1038.0], [37.9, 1039.0], [38.0, 1039.0], [38.1, 1040.0], [38.2, 1041.0], [38.3, 1041.0], [38.4, 1042.0], [38.5, 1042.0], [38.6, 1043.0], [38.7, 1044.0], [38.8, 1044.0], [38.9, 1045.0], [39.0, 1045.0], [39.1, 1046.0], [39.2, 1046.0], [39.3, 1047.0], [39.4, 1047.0], [39.5, 1048.0], [39.6, 1048.0], [39.7, 1048.0], [39.8, 1049.0], [39.9, 1049.0], [40.0, 1050.0], [40.1, 1050.0], [40.2, 1051.0], [40.3, 1051.0], [40.4, 1052.0], [40.5, 1052.0], [40.6, 1053.0], [40.7, 1053.0], [40.8, 1053.0], [40.9, 1054.0], [41.0, 1054.0], [41.1, 1055.0], [41.2, 1055.0], [41.3, 1056.0], [41.4, 1056.0], [41.5, 1057.0], [41.6, 1057.0], [41.7, 1057.0], [41.8, 1058.0], [41.9, 1058.0], [42.0, 1059.0], [42.1, 1059.0], [42.2, 1060.0], [42.3, 1060.0], [42.4, 1061.0], [42.5, 1061.0], [42.6, 1061.0], [42.7, 1062.0], [42.8, 1062.0], [42.9, 1063.0], [43.0, 1063.0], [43.1, 1064.0], [43.2, 1064.0], [43.3, 1065.0], [43.4, 1065.0], [43.5, 1066.0], [43.6, 1066.0], [43.7, 1067.0], [43.8, 1067.0], [43.9, 1067.0], [44.0, 1068.0], [44.1, 1068.0], [44.2, 1069.0], [44.3, 1069.0], [44.4, 1070.0], [44.5, 1070.0], [44.6, 1071.0], [44.7, 1071.0], [44.8, 1072.0], [44.9, 1072.0], [45.0, 1072.0], [45.1, 1073.0], [45.2, 1073.0], [45.3, 1074.0], [45.4, 1074.0], [45.5, 1074.0], [45.6, 1075.0], [45.7, 1076.0], [45.8, 1076.0], [45.9, 1076.0], [46.0, 1077.0], [46.1, 1077.0], [46.2, 1078.0], [46.3, 1078.0], [46.4, 1079.0], [46.5, 1079.0], [46.6, 1080.0], [46.7, 1080.0], [46.8, 1081.0], [46.9, 1081.0], [47.0, 1082.0], [47.1, 1082.0], [47.2, 1082.0], [47.3, 1083.0], [47.4, 1083.0], [47.5, 1084.0], [47.6, 1084.0], [47.7, 1084.0], [47.8, 1085.0], [47.9, 1085.0], [48.0, 1086.0], [48.1, 1086.0], [48.2, 1086.0], [48.3, 1087.0], [48.4, 1087.0], [48.5, 1088.0], [48.6, 1088.0], [48.7, 1088.0], [48.8, 1089.0], [48.9, 1089.0], [49.0, 1089.0], [49.1, 1090.0], [49.2, 1090.0], [49.3, 1091.0], [49.4, 1091.0], [49.5, 1091.0], [49.6, 1092.0], [49.7, 1092.0], [49.8, 1093.0], [49.9, 1093.0], [50.0, 1093.0], [50.1, 1094.0], [50.2, 1094.0], [50.3, 1095.0], [50.4, 1095.0], [50.5, 1095.0], [50.6, 1096.0], [50.7, 1096.0], [50.8, 1096.0], [50.9, 1097.0], [51.0, 1097.0], [51.1, 1098.0], [51.2, 1098.0], [51.3, 1098.0], [51.4, 1099.0], [51.5, 1099.0], [51.6, 1100.0], [51.7, 1100.0], [51.8, 1101.0], [51.9, 1101.0], [52.0, 1101.0], [52.1, 1102.0], [52.2, 1102.0], [52.3, 1103.0], [52.4, 1103.0], [52.5, 1104.0], [52.6, 1104.0], [52.7, 1104.0], [52.8, 1105.0], [52.9, 1105.0], [53.0, 1106.0], [53.1, 1106.0], [53.2, 1106.0], [53.3, 1107.0], [53.4, 1107.0], [53.5, 1108.0], [53.6, 1108.0], [53.7, 1109.0], [53.8, 1109.0], [53.9, 1109.0], [54.0, 1110.0], [54.1, 1110.0], [54.2, 1111.0], [54.3, 1111.0], [54.4, 1112.0], [54.5, 1113.0], [54.6, 1113.0], [54.7, 1114.0], [54.8, 1114.0], [54.9, 1115.0], [55.0, 1115.0], [55.1, 1115.0], [55.2, 1116.0], [55.3, 1116.0], [55.4, 1117.0], [55.5, 1118.0], [55.6, 1118.0], [55.7, 1119.0], [55.8, 1119.0], [55.9, 1120.0], [56.0, 1120.0], [56.1, 1120.0], [56.2, 1121.0], [56.3, 1121.0], [56.4, 1122.0], [56.5, 1122.0], [56.6, 1123.0], [56.7, 1123.0], [56.8, 1124.0], [56.9, 1124.0], [57.0, 1125.0], [57.1, 1125.0], [57.2, 1126.0], [57.3, 1126.0], [57.4, 1127.0], [57.5, 1127.0], [57.6, 1128.0], [57.7, 1128.0], [57.8, 1129.0], [57.9, 1130.0], [58.0, 1130.0], [58.1, 1131.0], [58.2, 1131.0], [58.3, 1132.0], [58.4, 1132.0], [58.5, 1133.0], [58.6, 1134.0], [58.7, 1134.0], [58.8, 1135.0], [58.9, 1135.0], [59.0, 1136.0], [59.1, 1137.0], [59.2, 1137.0], [59.3, 1138.0], [59.4, 1138.0], [59.5, 1139.0], [59.6, 1140.0], [59.7, 1140.0], [59.8, 1141.0], [59.9, 1141.0], [60.0, 1142.0], [60.1, 1143.0], [60.2, 1143.0], [60.3, 1144.0], [60.4, 1145.0], [60.5, 1145.0], [60.6, 1146.0], [60.7, 1147.0], [60.8, 1147.0], [60.9, 1148.0], [61.0, 1149.0], [61.1, 1149.0], [61.2, 1150.0], [61.3, 1151.0], [61.4, 1151.0], [61.5, 1152.0], [61.6, 1153.0], [61.7, 1153.0], [61.8, 1154.0], [61.9, 1155.0], [62.0, 1155.0], [62.1, 1156.0], [62.2, 1157.0], [62.3, 1158.0], [62.4, 1158.0], [62.5, 1159.0], [62.6, 1160.0], [62.7, 1161.0], [62.8, 1161.0], [62.9, 1162.0], [63.0, 1163.0], [63.1, 1164.0], [63.2, 1164.0], [63.3, 1165.0], [63.4, 1166.0], [63.5, 1166.0], [63.6, 1167.0], [63.7, 1168.0], [63.8, 1169.0], [63.9, 1169.0], [64.0, 1170.0], [64.1, 1171.0], [64.2, 1172.0], [64.3, 1173.0], [64.4, 1174.0], [64.5, 1175.0], [64.6, 1175.0], [64.7, 1176.0], [64.8, 1177.0], [64.9, 1178.0], [65.0, 1179.0], [65.1, 1180.0], [65.2, 1181.0], [65.3, 1182.0], [65.4, 1183.0], [65.5, 1184.0], [65.6, 1185.0], [65.7, 1186.0], [65.8, 1187.0], [65.9, 1188.0], [66.0, 1189.0], [66.1, 1190.0], [66.2, 1191.0], [66.3, 1192.0], [66.4, 1192.0], [66.5, 1193.0], [66.6, 1194.0], [66.7, 1195.0], [66.8, 1196.0], [66.9, 1197.0], [67.0, 1199.0], [67.1, 1200.0], [67.2, 1201.0], [67.3, 1202.0], [67.4, 1203.0], [67.5, 1204.0], [67.6, 1205.0], [67.7, 1206.0], [67.8, 1207.0], [67.9, 1208.0], [68.0, 1209.0], [68.1, 1211.0], [68.2, 1211.0], [68.3, 1213.0], [68.4, 1214.0], [68.5, 1215.0], [68.6, 1217.0], [68.7, 1218.0], [68.8, 1219.0], [68.9, 1220.0], [69.0, 1221.0], [69.1, 1223.0], [69.2, 1224.0], [69.3, 1226.0], [69.4, 1227.0], [69.5, 1229.0], [69.6, 1231.0], [69.7, 1233.0], [69.8, 1234.0], [69.9, 1237.0], [70.0, 1238.0], [70.1, 1240.0], [70.2, 1242.0], [70.3, 1245.0], [70.4, 1247.0], [70.5, 1249.0], [70.6, 1252.0], [70.7, 1253.0], [70.8, 1256.0], [70.9, 1259.0], [71.0, 1261.0], [71.1, 1264.0], [71.2, 1266.0], [71.3, 1269.0], [71.4, 1272.0], [71.5, 1275.0], [71.6, 1277.0], [71.7, 1280.0], [71.8, 1281.0], [71.9, 1284.0], [72.0, 1286.0], [72.1, 1289.0], [72.2, 1292.0], [72.3, 1294.0], [72.4, 1298.0], [72.5, 1301.0], [72.6, 1304.0], [72.7, 1306.0], [72.8, 1309.0], [72.9, 1312.0], [73.0, 1316.0], [73.1, 1319.0], [73.2, 1323.0], [73.3, 1328.0], [73.4, 1332.0], [73.5, 1337.0], [73.6, 1343.0], [73.7, 1348.0], [73.8, 1354.0], [73.9, 1361.0], [74.0, 1371.0], [74.1, 1377.0], [74.2, 1384.0], [74.3, 1392.0], [74.4, 1399.0], [74.5, 1406.0], [74.6, 1414.0], [74.7, 1420.0], [74.8, 1426.0], [74.9, 1434.0], [75.0, 1442.0], [75.1, 1453.0], [75.2, 1463.0], [75.3, 1471.0], [75.4, 1479.0], [75.5, 1487.0], [75.6, 1497.0], [75.7, 1505.0], [75.8, 1520.0], [75.9, 1532.0], [76.0, 1546.0], [76.1, 1563.0], [76.2, 1575.0], [76.3, 1584.0], [76.4, 1594.0], [76.5, 1605.0], [76.6, 1616.0], [76.7, 1632.0], [76.8, 1645.0], [76.9, 1659.0], [77.0, 1671.0], [77.1, 1683.0], [77.2, 1694.0], [77.3, 1710.0], [77.4, 1722.0], [77.5, 1736.0], [77.6, 1753.0], [77.7, 1768.0], [77.8, 1779.0], [77.9, 1788.0], [78.0, 1796.0], [78.1, 1803.0], [78.2, 1807.0], [78.3, 1814.0], [78.4, 1820.0], [78.5, 1828.0], [78.6, 1838.0], [78.7, 1847.0], [78.8, 1858.0], [78.9, 1863.0], [79.0, 1872.0], [79.1, 1882.0], [79.2, 1892.0], [79.3, 1901.0], [79.4, 1909.0], [79.5, 1917.0], [79.6, 1926.0], [79.7, 1933.0], [79.8, 1942.0], [79.9, 1949.0], [80.0, 1956.0], [80.1, 1960.0], [80.2, 1966.0], [80.3, 1972.0], [80.4, 1977.0], [80.5, 1983.0], [80.6, 1989.0], [80.7, 1996.0], [80.8, 2001.0], [80.9, 2008.0], [81.0, 2013.0], [81.1, 2018.0], [81.2, 2024.0], [81.3, 2029.0], [81.4, 2035.0], [81.5, 2041.0], [81.6, 2045.0], [81.7, 2051.0], [81.8, 2056.0], [81.9, 2063.0], [82.0, 2070.0], [82.1, 2075.0], [82.2, 2081.0], [82.3, 2086.0], [82.4, 2091.0], [82.5, 2095.0], [82.6, 2100.0], [82.7, 2105.0], [82.8, 2112.0], [82.9, 2119.0], [83.0, 2126.0], [83.1, 2130.0], [83.2, 2136.0], [83.3, 2143.0], [83.4, 2150.0], [83.5, 2155.0], [83.6, 2161.0], [83.7, 2167.0], [83.8, 2171.0], [83.9, 2178.0], [84.0, 2184.0], [84.1, 2189.0], [84.2, 2194.0], [84.3, 2199.0], [84.4, 2204.0], [84.5, 2209.0], [84.6, 2214.0], [84.7, 2218.0], [84.8, 2222.0], [84.9, 2226.0], [85.0, 2232.0], [85.1, 2236.0], [85.2, 2241.0], [85.3, 2245.0], [85.4, 2251.0], [85.5, 2256.0], [85.6, 2262.0], [85.7, 2267.0], [85.8, 2271.0], [85.9, 2275.0], [86.0, 2281.0], [86.1, 2288.0], [86.2, 2291.0], [86.3, 2298.0], [86.4, 2303.0], [86.5, 2307.0], [86.6, 2315.0], [86.7, 2321.0], [86.8, 2326.0], [86.9, 2330.0], [87.0, 2335.0], [87.1, 2340.0], [87.2, 2348.0], [87.3, 2355.0], [87.4, 2361.0], [87.5, 2367.0], [87.6, 2372.0], [87.7, 2376.0], [87.8, 2381.0], [87.9, 2387.0], [88.0, 2393.0], [88.1, 2399.0], [88.2, 2406.0], [88.3, 2411.0], [88.4, 2417.0], [88.5, 2423.0], [88.6, 2428.0], [88.7, 2433.0], [88.8, 2439.0], [88.9, 2443.0], [89.0, 2447.0], [89.1, 2451.0], [89.2, 2455.0], [89.3, 2459.0], [89.4, 2464.0], [89.5, 2469.0], [89.6, 2473.0], [89.7, 2478.0], [89.8, 2482.0], [89.9, 2486.0], [90.0, 2493.0], [90.1, 2500.0], [90.2, 2507.0], [90.3, 2514.0], [90.4, 2523.0], [90.5, 2534.0], [90.6, 2544.0], [90.7, 2554.0], [90.8, 2563.0], [90.9, 2572.0], [91.0, 2578.0], [91.1, 2587.0], [91.2, 2594.0], [91.3, 2603.0], [91.4, 2613.0], [91.5, 2622.0], [91.6, 2632.0], [91.7, 2645.0], [91.8, 2653.0], [91.9, 2660.0], [92.0, 2670.0], [92.1, 2683.0], [92.2, 2694.0], [92.3, 2701.0], [92.4, 2711.0], [92.5, 2730.0], [92.6, 2744.0], [92.7, 2757.0], [92.8, 2763.0], [92.9, 2771.0], [93.0, 2787.0], [93.1, 2801.0], [93.2, 2815.0], [93.3, 2831.0], [93.4, 2850.0], [93.5, 2865.0], [93.6, 2877.0], [93.7, 2898.0], [93.8, 2916.0], [93.9, 2949.0], [94.0, 2968.0], [94.1, 2992.0], [94.2, 3015.0], [94.3, 3042.0], [94.4, 3070.0], [94.5, 3088.0], [94.6, 3111.0], [94.7, 3140.0], [94.8, 3167.0], [94.9, 3183.0], [95.0, 3201.0], [95.1, 3216.0], [95.2, 3230.0], [95.3, 3250.0], [95.4, 3283.0], [95.5, 3311.0], [95.6, 3331.0], [95.7, 3350.0], [95.8, 3368.0], [95.9, 3386.0], [96.0, 3401.0], [96.1, 3427.0], [96.2, 3443.0], [96.3, 3464.0], [96.4, 3480.0], [96.5, 3503.0], [96.6, 3523.0], [96.7, 3551.0], [96.8, 3570.0], [96.9, 3593.0], [97.0, 3618.0], [97.1, 3646.0], [97.2, 3665.0], [97.3, 3694.0], [97.4, 3703.0], [97.5, 3720.0], [97.6, 3745.0], [97.7, 3768.0], [97.8, 3792.0], [97.9, 3847.0], [98.0, 3911.0], [98.1, 3947.0], [98.2, 3967.0], [98.3, 4004.0], [98.4, 4054.0], [98.5, 4166.0], [98.6, 4251.0], [98.7, 4303.0], [98.8, 4343.0], [98.9, 4385.0], [99.0, 4454.0], [99.1, 4516.0], [99.2, 4587.0], [99.3, 4655.0], [99.4, 4754.0], [99.5, 4854.0], [99.6, 4953.0], [99.7, 4955.0], [99.8, 5003.0], [99.9, 5011.0], [100.0, 5482.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 7906.0, "series": [{"data": [[0.0, 56.0], [600.0, 1400.0], [700.0, 1236.0], [800.0, 1652.0], [900.0, 2877.0], [1000.0, 7906.0], [1100.0, 6213.0], [1200.0, 2153.0], [1300.0, 778.0], [1400.0, 494.0], [1500.0, 319.0], [1600.0, 319.0], [1700.0, 328.0], [1800.0, 488.0], [1900.0, 597.0], [2000.0, 731.0], [2100.0, 691.0], [2200.0, 806.0], [2300.0, 711.0], [2400.0, 792.0], [2500.0, 469.0], [2600.0, 404.0], [2700.0, 323.0], [2800.0, 249.0], [2900.0, 172.0], [3000.0, 162.0], [3100.0, 179.0], [3200.0, 186.0], [3300.0, 214.0], [3400.0, 199.0], [3500.0, 178.0], [3600.0, 159.0], [3700.0, 196.0], [3800.0, 66.0], [3900.0, 117.0], [4000.0, 64.0], [4100.0, 45.0], [4200.0, 54.0], [4300.0, 91.0], [4400.0, 64.0], [4500.0, 57.0], [4600.0, 48.0], [4700.0, 45.0], [4800.0, 40.0], [4900.0, 92.0], [5100.0, 26.0], [5000.0, 56.0], [5200.0, 2.0], [5300.0, 3.0], [5400.0, 3.0], [100.0, 552.0], [200.0, 1283.0], [300.0, 1140.0], [400.0, 1128.0], [500.0, 1388.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 26092.0, "series": [{"data": [[0.0, 4167.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26092.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9741.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.57470366E12, "maxY": 100.0, "series": [{"data": [[1.57470366E12, 1.0]], "isOverall": false, "label": "Powerhouse Thread Group - Search", "isController": false}, {"data": [[1.57470396E12, 100.0], [1.57470366E12, 100.0], [1.57470414E12, 100.0], [1.57470408E12, 100.0], [1.57470378E12, 100.0], [1.57470426E12, 43.312633832976424], [1.57470372E12, 100.0], [1.5747042E12, 98.937577584678], [1.5747039E12, 100.0], [1.57470384E12, 100.0], [1.57470402E12, 100.0]], "isOverall": false, "label": "Powerhouse Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57470426E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 1986.4615384615386, "series": [{"data": [[3.0, 89.66666666666667], [4.0, 85.5], [6.0, 102.16666666666666], [7.0, 74.0], [9.0, 266.07142857142856], [11.0, 219.9], [12.0, 251.27272727272728], [14.0, 212.75], [15.0, 292.3636363636364], [16.0, 249.0], [17.0, 155.5], [19.0, 298.0], [20.0, 202.25], [22.0, 270.6666666666667], [23.0, 272.24999999999994], [24.0, 210.4], [25.0, 73.0], [28.0, 273.3913043478261], [29.0, 300.8333333333333], [30.0, 265.3333333333333], [31.0, 152.33333333333334], [40.0, 208.11764705882354], [43.0, 532.1428571428572], [42.0, 327.0], [44.0, 564.8125], [49.0, 638.3076923076923], [48.0, 695.1111111111111], [51.0, 336.625], [50.0, 445.00000000000006], [52.0, 90.0], [59.0, 157.5], [58.0, 794.1265822784811], [61.0, 0.0], [67.0, 708.3186813186813], [71.0, 885.5], [69.0, 994.0], [68.0, 1086.0], [74.0, 116.0], [73.0, 585.4444444444443], [72.0, 888.5], [79.0, 523.5189873417722], [81.0, 214.33333333333334], [80.0, 466.5], [87.0, 847.7931034482759], [90.0, 120.0], [89.0, 575.3181818181818], [88.0, 799.0], [95.0, 1302.805309734513], [92.0, 923.8557692307693], [99.0, 1848.8395061728402], [98.0, 1678.0], [97.0, 1986.4615384615386], [96.0, 918.0104166666666], [100.0, 1346.2393551373168], [1.0, 33.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.18744531386697, 1331.6335591610168]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1011.3833333333333, "minX": 1.57470366E12, "maxY": 1670062.3166666667, "series": [{"data": [[1.57470396E12, 5244.966666666666], [1.57470366E12, 1365.9666666666667], [1.57470414E12, 11935.85], [1.57470408E12, 13587.75], [1.57470378E12, 9221.8], [1.57470426E12, 1011.3833333333333], [1.57470372E12, 10241.783333333333], [1.5747042E12, 12219.833333333334], [1.5747039E12, 4953.766666666666], [1.57470384E12, 4447.7], [1.57470402E12, 12674.966666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57470396E12, 646635.9333333333], [1.57470366E12, 150885.36666666667], [1.57470414E12, 1475592.3833333333], [1.57470408E12, 1670062.3166666667], [1.57470378E12, 1126447.0], [1.57470426E12, 125615.21666666666], [1.57470372E12, 1261287.4333333333], [1.5747042E12, 1505763.6833333333], [1.5747039E12, 610323.1833333333], [1.57470384E12, 548188.0333333333], [1.57470402E12, 1554937.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57470426E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 521.6638115631696, "minX": 1.57470366E12, "maxY": 2825.847890088321, "series": [{"data": [[1.57470396E12, 2537.7866056572443], [1.57470366E12, 1967.4307178631057], [1.57470414E12, 1023.7982567641243], [1.57470408E12, 909.5142720459264], [1.57470378E12, 1311.814117647059], [1.57470426E12, 521.6638115631696], [1.57470372E12, 1236.2486211285586], [1.5747042E12, 987.0429154105332], [1.5747039E12, 2615.8179814896466], [1.57470384E12, 2825.847890088321], [1.57470402E12, 982.1865480061595]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57470426E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 521.6188436830834, "minX": 1.57470366E12, "maxY": 2825.7791952894972, "series": [{"data": [[1.57470396E12, 2537.7375207986624], [1.57470366E12, 1967.1953255425715], [1.57470414E12, 1023.7189032140946], [1.57470408E12, 909.4460213682014], [1.57470378E12, 1311.707294117649], [1.57470426E12, 521.6188436830834], [1.57470372E12, 1236.1970725498547], [1.5747042E12, 986.9755275758095], [1.5747039E12, 2615.765094755399], [1.57470384E12, 2825.7791952894972], [1.57470402E12, 982.1393119972639]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57470426E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 6.99338915821947, "minX": 1.57470366E12, "maxY": 157.96611764705864, "series": [{"data": [[1.57470396E12, 9.886855241264557], [1.57470366E12, 42.664440734557566], [1.57470414E12, 108.19629562375164], [1.57470408E12, 83.21081167277953], [1.57470378E12, 157.96611764705864], [1.57470426E12, 31.869379014989285], [1.57470372E12, 61.63046245226992], [1.5747042E12, 102.05515162262826], [1.5747039E12, 6.99338915821947], [1.57470384E12, 34.573601570166794], [1.57470402E12, 64.45096696902286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57470426E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 28.0, "minX": 1.57470366E12, "maxY": 5482.0, "series": [{"data": [[1.57470396E12, 5121.0], [1.57470366E12, 2886.0], [1.57470414E12, 2352.0], [1.57470408E12, 2311.0], [1.57470378E12, 4048.0], [1.57470426E12, 1413.0], [1.57470372E12, 2563.0], [1.5747042E12, 2328.0], [1.5747039E12, 4245.0], [1.57470384E12, 5482.0], [1.57470402E12, 2859.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57470396E12, 91.0], [1.57470366E12, 70.0], [1.57470414E12, 120.0], [1.57470408E12, 72.0], [1.57470378E12, 114.0], [1.57470426E12, 28.0], [1.57470372E12, 56.0], [1.5747042E12, 101.0], [1.5747039E12, 290.0], [1.57470384E12, 93.0], [1.57470402E12, 80.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57470396E12, 4586.0], [1.57470366E12, 2764.5], [1.57470414E12, 1231.0], [1.57470408E12, 1158.0], [1.57470378E12, 2208.9], [1.57470426E12, 1083.0], [1.57470372E12, 2329.0], [1.5747042E12, 1209.0], [1.5747039E12, 3278.0], [1.57470384E12, 4042.2000000000003], [1.57470402E12, 1676.800000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57470396E12, 5004.0], [1.57470366E12, 2872.02], [1.57470414E12, 2268.92], [1.57470408E12, 1782.679999999992], [1.57470378E12, 3717.119999999981], [1.57470426E12, 1262.96], [1.57470372E12, 2505.7000000000007], [1.5747042E12, 1784.0000000000018], [1.5747039E12, 3921.3], [1.57470384E12, 5132.83], [1.57470402E12, 2402.5600000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57470396E12, 4953.0], [1.57470366E12, 2828.1], [1.57470414E12, 1345.0], [1.57470408E12, 1224.3999999999996], [1.57470378E12, 2464.0], [1.57470426E12, 1091.6], [1.57470372E12, 2432.25], [1.5747042E12, 1249.0], [1.5747039E12, 3663.0], [1.57470384E12, 4502.0], [1.57470402E12, 2041.8000000000002]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57470426E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4553.0, "series": [{"data": [[4.0, 741.0], [6.0, 458.0], [7.0, 1821.0], [9.0, 694.0], [10.0, 508.0], [11.0, 793.5], [12.0, 1132.5], [13.0, 1168.0], [14.0, 822.0], [15.0, 687.5], [16.0, 1135.5], [17.0, 622.0], [18.0, 1803.5], [19.0, 1999.5], [20.0, 4553.0], [21.0, 4021.0], [22.0, 2406.5], [23.0, 1043.0], [24.0, 3117.0], [25.0, 3236.5], [26.0, 1694.5], [27.0, 3000.5], [28.0, 2712.5], [29.0, 3392.5], [30.0, 2800.5], [31.0, 3268.0], [32.0, 2690.0], [33.0, 1971.0], [34.0, 2135.5], [35.0, 2438.0], [37.0, 2495.0], [36.0, 2454.0], [39.0, 2459.5], [38.0, 2444.5], [41.0, 2233.0], [40.0, 2415.5], [42.0, 2182.5], [43.0, 2186.0], [44.0, 1875.5], [45.0, 2194.0], [46.0, 2144.0], [47.0, 2212.0], [48.0, 2337.0], [49.0, 2657.0], [51.0, 2567.5], [50.0, 2091.5], [53.0, 2143.0], [52.0, 2232.0], [54.0, 1705.0], [57.0, 1462.0], [56.0, 2025.5], [58.0, 1813.5], [59.0, 1207.0], [60.0, 2152.5], [63.0, 2722.0], [62.0, 3251.5], [65.0, 1992.0], [66.0, 1882.0], [70.0, 3930.5], [68.0, 1862.0], [73.0, 1236.0], [74.0, 2093.5], [72.0, 1089.5], [75.0, 1806.0], [76.0, 1863.0], [80.0, 1060.5], [81.0, 2903.0], [82.0, 1007.0], [84.0, 1293.0], [88.0, 1130.0], [94.0, 2130.0], [93.0, 1948.0], [92.0, 276.0], [96.0, 1081.5], [97.0, 1185.0], [102.0, 1224.5], [103.0, 1222.0], [101.0, 2082.0], [107.0, 1079.0], [105.0, 1103.0], [106.0, 1194.5], [104.0, 1166.0], [109.0, 1101.0], [110.0, 1076.0], [111.0, 1083.0], [108.0, 1094.5], [113.0, 984.0], [112.0, 1091.0], [114.0, 1087.5], [115.0, 1070.0], [118.0, 1008.5], [117.0, 1013.5], [119.0, 1000.0], [116.0, 1052.0], [122.0, 1009.0], [120.0, 995.5], [121.0, 1059.0], [123.0, 943.0], [125.0, 1012.5], [124.0, 998.0], [127.0, 964.5], [126.0, 1029.0], [129.0, 961.5], [132.0, 1045.5], [131.0, 646.0], [133.0, 1123.5], [130.0, 1353.5], [128.0, 1023.5], [135.0, 881.0], [142.0, 1311.0], [141.0, 996.0], [138.0, 964.0], [140.0, 503.0], [215.0, 662.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 215.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4553.0, "series": [{"data": [[4.0, 741.0], [6.0, 458.0], [7.0, 1821.0], [9.0, 694.0], [10.0, 508.0], [11.0, 793.5], [12.0, 1132.0], [13.0, 1168.0], [14.0, 822.0], [15.0, 687.5], [16.0, 1135.5], [17.0, 622.0], [18.0, 1803.0], [19.0, 1999.5], [20.0, 4553.0], [21.0, 4020.5], [22.0, 2406.5], [23.0, 1043.0], [24.0, 3117.0], [25.0, 3236.0], [26.0, 1694.0], [27.0, 3000.5], [28.0, 2712.5], [29.0, 3392.5], [30.0, 2800.0], [31.0, 3268.0], [32.0, 2689.5], [33.0, 1971.0], [34.0, 2135.5], [35.0, 2438.0], [37.0, 2495.0], [36.0, 2454.0], [39.0, 2459.5], [38.0, 2444.5], [41.0, 2233.0], [40.0, 2415.5], [42.0, 2182.5], [43.0, 2186.0], [44.0, 1875.5], [45.0, 2193.0], [46.0, 2144.0], [47.0, 2212.0], [48.0, 2337.0], [49.0, 2657.0], [51.0, 2567.5], [50.0, 2091.0], [53.0, 2143.0], [52.0, 2232.0], [54.0, 1705.0], [57.0, 1462.0], [56.0, 2025.5], [58.0, 1813.5], [59.0, 1206.0], [60.0, 2152.5], [63.0, 2722.0], [62.0, 3251.5], [65.0, 1992.0], [66.0, 1882.0], [70.0, 3930.5], [68.0, 1862.0], [73.0, 1236.0], [74.0, 2093.5], [72.0, 1089.5], [75.0, 1806.0], [76.0, 1863.0], [80.0, 1060.5], [81.0, 2903.0], [82.0, 1007.0], [84.0, 1293.0], [88.0, 1130.0], [94.0, 2129.5], [93.0, 1948.0], [92.0, 276.0], [96.0, 1081.5], [97.0, 1185.0], [102.0, 1224.5], [103.0, 1222.0], [101.0, 2082.0], [107.0, 1079.0], [105.0, 1103.0], [106.0, 1194.5], [104.0, 1166.0], [109.0, 1101.0], [110.0, 1076.0], [111.0, 1083.0], [108.0, 1094.5], [113.0, 984.0], [112.0, 1091.0], [114.0, 1087.0], [115.0, 1070.0], [118.0, 1008.5], [117.0, 1013.0], [119.0, 1000.0], [116.0, 1052.0], [122.0, 1009.0], [120.0, 995.5], [121.0, 1059.0], [123.0, 943.0], [125.0, 1012.5], [124.0, 998.0], [127.0, 964.5], [126.0, 1029.0], [129.0, 961.0], [132.0, 1045.5], [131.0, 646.0], [133.0, 1123.5], [130.0, 1353.5], [128.0, 1023.0], [135.0, 880.0], [142.0, 1311.0], [141.0, 995.0], [138.0, 964.0], [140.0, 503.0], [215.0, 662.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 215.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.633333333333334, "minX": 1.57470366E12, "maxY": 104.38333333333334, "series": [{"data": [[1.57470396E12, 40.083333333333336], [1.57470366E12, 11.633333333333333], [1.57470414E12, 91.91666666666667], [1.57470408E12, 104.38333333333334], [1.57470378E12, 70.38333333333334], [1.57470426E12, 6.633333333333334], [1.57470372E12, 78.58333333333333], [1.5747042E12, 93.46666666666667], [1.5747039E12, 37.8], [1.57470384E12, 34.416666666666664], [1.57470402E12, 97.38333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57470426E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57470366E12, "maxY": 104.51666666666667, "series": [{"data": [[1.57470396E12, 40.06666666666667], [1.57470366E12, 9.966666666666667], [1.57470414E12, 91.78333333333333], [1.57470408E12, 104.51666666666667], [1.57470378E12, 70.83333333333333], [1.57470426E12, 7.783333333333333], [1.57470372E12, 78.56666666666666], [1.5747042E12, 93.98333333333333], [1.5747039E12, 37.81666666666667], [1.57470384E12, 33.96666666666667], [1.57470402E12, 97.38333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57470366E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.URISyntaxException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57470426E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57470366E12, "maxY": 104.51666666666667, "series": [{"data": [[1.57470366E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.57470396E12, 40.06666666666667], [1.57470366E12, 9.966666666666667], [1.57470414E12, 91.78333333333333], [1.57470408E12, 104.51666666666667], [1.57470378E12, 70.83333333333333], [1.57470426E12, 7.783333333333333], [1.57470372E12, 78.56666666666666], [1.5747042E12, 93.98333333333333], [1.5747039E12, 37.81666666666667], [1.57470384E12, 33.96666666666667], [1.57470402E12, 97.38333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57470426E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57470366E12, "maxY": 104.51666666666667, "series": [{"data": [[1.57470396E12, 40.06666666666667], [1.57470366E12, 9.966666666666667], [1.57470414E12, 91.78333333333333], [1.57470408E12, 104.51666666666667], [1.57470378E12, 70.83333333333333], [1.57470426E12, 7.783333333333333], [1.57470372E12, 78.56666666666666], [1.5747042E12, 93.98333333333333], [1.5747039E12, 37.81666666666667], [1.57470384E12, 33.96666666666667], [1.57470402E12, 97.38333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57470366E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57470426E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

