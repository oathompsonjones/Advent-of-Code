// https://adventofcode.com/2020/day/14
/* eslint-disable max-lines */

const input = [
    "mask = 1010X101010010101X00X00011XX11011111",
    "mem[1303] = 728",
    "mem[5195] = 213352120",
    "mem[34818] = 782",
    "mem[43971] = 29724050",
    "mem[51737] = 1731727",
    "mem[5175] = 353551570",
    "mem[45056] = 8766",
    "mask = 0110X1011110XX111X0011X0X01X00010010",
    "mem[7343] = 6334776",
    "mem[28415] = 10870",
    "mem[4761] = 2912",
    "mem[43137] = 14501587",
    "mem[27900] = 10713",
    "mem[19990] = 519691",
    "mask = 001X0X011110X01XX000100X10010100X00X",
    "mem[60244] = 1003035",
    "mem[4068] = 7428",
    "mem[36608] = 846",
    "mem[41866] = 7255",
    "mem[6694] = 1615",
    "mask = 00100X011110101011X01X1X100011X111XX",
    "mem[48890] = 66269",
    "mem[17236] = 189693",
    "mem[2699] = 43253",
    "mem[2454] = 3144",
    "mem[39460] = 3089616",
    "mem[15030] = 12081234",
    "mask = 0010010111100011110001XX110X111X1101",
    "mem[39460] = 11410",
    "mem[60142] = 71274",
    "mem[25233] = 1470014",
    "mask = 001010XX0110X0X010001001X01011XX010X",
    "mem[22857] = 1694968",
    "mem[45337] = 4212",
    "mem[11908] = 1413",
    "mem[22285] = 37595935",
    "mem[47401] = 85",
    "mask = X0100000010111XX10XX100X00011X101000",
    "mem[7417] = 1439",
    "mem[30454] = 231239",
    "mem[57206] = 135231401",
    "mask = X00X00011110X01XX1X0101X01X0X1001101",
    "mem[3723] = 783778",
    "mem[13431] = 5668213",
    "mem[51267] = 10450641",
    "mem[34637] = 7118",
    "mem[61773] = 37952031",
    "mask = 01100011111010100X00X11001100001X01X",
    "mem[43657] = 4053",
    "mem[60574] = 208",
    "mem[63077] = 1061",
    "mask = 0010XX011111111X110X01X1011X100101X1",
    "mem[3723] = 415",
    "mem[3445] = 15859116",
    "mem[41920] = 420621",
    "mask = 110000X1X11111X01100101001X01X10X010",
    "mem[35499] = 20781439",
    "mem[52838] = 7255541",
    "mask = 11X0X001111111X1110X111XX110100XXX11",
    "mem[54458] = 6901034",
    "mem[22912] = 933561",
    "mem[56316] = 22094822",
    "mem[9061] = 4263320",
    "mem[18464] = 12349351",
    "mask = 0010XXX111101010X10010110X10XXX001X1",
    "mem[47210] = 950410",
    "mem[44693] = 64746868",
    "mem[43376] = 231697502",
    "mem[16345] = 64190",
    "mem[20801] = 47984501",
    "mask = 00101X01111X1X10110000XX011011X00101",
    "mem[29047] = 56934570",
    "mem[7343] = 34945618",
    "mem[20465] = 117516955",
    "mem[37958] = 2965",
    "mem[42804] = 7022",
    "mem[55559] = 2588315",
    "mem[42833] = 496336618",
    "mask = 001001001X10X01011000XX01011X0X00X1X",
    "mem[36900] = 4267113",
    "mem[18097] = 787869710",
    "mem[20935] = 9666",
    "mask = 0X101101X110XX1110110X00011001110110",
    "mem[8063] = 61539",
    "mem[62771] = 13459",
    "mem[22406] = 1573083",
    "mem[57402] = 259790331",
    "mem[6391] = 60",
    "mem[31844] = 43954",
    "mem[47641] = 902301",
    "mask = XX10X10101001X101X00101010X01XX00111",
    "mem[42804] = 3474837",
    "mem[8265] = 8147",
    "mem[31405] = 23707",
    "mem[12687] = 173",
    "mem[44291] = 1721",
    "mask = X01X1001011XX0X0110001011X011X1X0101",
    "mem[23640] = 92068",
    "mem[34308] = 47290",
    "mem[19715] = 1865698",
    "mem[34086] = 11397123",
    "mem[38401] = 25087116",
    "mem[23653] = 2124900",
    "mem[5175] = 59504",
    "mask = 010X1101X1101X1010000000101011X01101",
    "mem[36608] = 27387896",
    "mem[51052] = 9633930",
    "mem[49440] = 27834809",
    "mem[213] = 6773",
    "mem[61490] = 1532",
    "mask = 0X10X11101101XX010000010X1101XX10001",
    "mem[58790] = 140286263",
    "mem[43181] = 7274951",
    "mem[33657] = 102007",
    "mem[62963] = 38045093",
    "mem[10183] = 1593",
    "mask = 0X100XX11110101XX1001X1X1110X0010110",
    "mem[34818] = 576",
    "mem[25241] = 29771912",
    "mem[55694] = 25675255",
    "mem[55532] = 2905",
    "mem[31674] = 22202384",
    "mem[40737] = 240265396",
    "mask = 01000X01XX1XX01010001XX0XX0011000101",
    "mem[3861] = 188",
    "mem[31405] = 28053743",
    "mem[19392] = 130524",
    "mem[53356] = 9628388",
    "mask = X010010011X01010110000111X0X00000010",
    "mem[29019] = 5874",
    "mem[58933] = 3630",
    "mem[11075] = 8076",
    "mem[26867] = 1617118",
    "mem[50839] = 5784986",
    "mem[62785] = 2319201",
    "mask = X1000111001X0X101110011001X111011110",
    "mem[38706] = 3267",
    "mem[51436] = 108",
    "mem[56768] = 93786924",
    "mem[60797] = 1829",
    "mem[13226] = 101560323",
    "mask = 10100X011XXX11111X000X0XX1X011000101",
    "mem[30557] = 24517",
    "mem[44625] = 133397612",
    "mem[52664] = 13349",
    "mem[40985] = 1162102",
    "mem[3103] = 144664",
    "mask = 01X0X10001111X1010000111XX0110000100",
    "mem[18838] = 93742603",
    "mem[65481] = 64659697",
    "mem[46060] = 6434",
    "mem[42804] = 38595",
    "mem[28112] = 9053",
    "mem[44064] = 36165247",
    "mask = 001X110111X110101100XX010X1X010001X1",
    "mem[63113] = 127541",
    "mem[1765] = 7989",
    "mem[9226] = 4084",
    "mem[3861] = 97296879",
    "mask = 00100X0101101010111X100X010000111X1X",
    "mem[35358] = 686552",
    "mem[6694] = 1841506",
    "mem[55621] = 1345",
    "mem[41000] = 60174738",
    "mask = 0010000X0XX111X110X000XX00X1011010X1",
    "mem[40402] = 145874501",
    "mem[57922] = 399",
    "mem[52664] = 99438939",
    "mask = 1100000111X110111X011X10X11XXX1XX011",
    "mem[33569] = 114300",
    "mem[61164] = 14120711",
    "mask = 11000X0110X1101X1X00110100001001X010",
    "mem[53897] = 494676",
    "mem[20401] = 3268954",
    "mem[11948] = 7012",
    "mem[57951] = 596",
    "mem[39747] = 190642769",
    "mem[48609] = 8683",
    "mem[1886] = 30506550",
    "mask = 1X101100011010XX1000100100001X000001",
    "mem[29590] = 158427",
    "mem[60687] = 1158",
    "mem[41555] = 82232640",
    "mem[8063] = 650",
    "mem[62026] = 1522",
    "mask = X01X0100111X101X1100101110XX1X100X10",
    "mem[62760] = 2759",
    "mem[65014] = 15033892",
    "mem[16548] = 227511",
    "mem[25472] = 940",
    "mem[58257] = 303172074",
    "mem[25462] = 1448494",
    "mem[14207] = 11623",
    "mask = 111X00X101X0X011100XX000100101000X00",
    "mem[54065] = 385095",
    "mem[6381] = 173190",
    "mem[45414] = 2576",
    "mem[32716] = 216614666",
    "mem[47401] = 512991",
    "mem[39753] = 1919665",
    "mask = 0X00011100100110XX0X011X01111X0X11X0",
    "mem[2194] = 547",
    "mem[61316] = 3475",
    "mem[35639] = 64138",
    "mem[24776] = 1204",
    "mask = 1X101101X1X01010100000001100X1000100",
    "mem[23580] = 234194",
    "mem[3192] = 121525545",
    "mem[19701] = 4464888",
    "mem[30757] = 224067766",
    "mem[32607] = 1173",
    "mask = 1X1X1100011X101X10000X00110101110111",
    "mem[15935] = 3229",
    "mem[41229] = 555",
    "mem[34746] = 395",
    "mem[18832] = 617",
    "mask = 0010010111X01XX0110000100000X1010011",
    "mem[48352] = 7847",
    "mem[6372] = 27568",
    "mem[38353] = 7485288",
    "mem[4384] = 6397740",
    "mem[45671] = 1826",
    "mask = 0010000101101010XXX000001XX010100011",
    "mem[41581] = 11155",
    "mem[16345] = 6986933",
    "mem[54042] = 12767",
    "mask = 0XXX1X1111101010010X1010011X1101X101",
    "mem[2194] = 6152",
    "mem[38909] = 83",
    "mem[31247] = 1573830",
    "mem[60597] = 386",
    "mem[6753] = 14417902",
    "mask = X110XX1101X011X0100X101001111011X101",
    "mem[15722] = 757783",
    "mem[50431] = 720318",
    "mem[63271] = 210820202",
    "mem[53226] = 714717",
    "mem[59123] = 4122",
    "mask = 0010X001X1X01010X1001011100100010101",
    "mem[17236] = 197898992",
    "mem[38190] = 2368352",
    "mem[9018] = 235",
    "mem[1553] = 373976",
    "mem[38729] = 89918321",
    "mem[31669] = 50727",
    "mem[28423] = 18976",
    "mask = 111010011111X1X1X101X10101X010X111X1",
    "mem[62005] = 1863145",
    "mem[62607] = 191764",
    "mem[12344] = 516953",
    "mem[14945] = 454940",
    "mem[44064] = 420728",
    "mask = 000001X100100110XX0100101010000XX100",
    "mem[2292] = 25305594",
    "mem[33356] = 189060799",
    "mem[1785] = 100787",
    "mem[28040] = 246660557",
    "mem[25931] = 365777315",
    "mem[50067] = 12600",
    "mem[4177] = 142606369",
    "mask = 001X11X10110XX10XX001X10000010001001",
    "mem[61912] = 261608214",
    "mem[44398] = 2204",
    "mem[64497] = 697913547",
    "mem[10951] = 23268",
    "mem[58010] = 589",
    "mem[45644] = 445371547",
    "mem[24722] = 930518",
    "mask = 101000X11001X1X11X00000011X00XX10X01",
    "mem[3726] = 93",
    "mem[9735] = 3651838",
    "mask = 001001X111X01111X100101110X011000011",
    "mem[33718] = 1322993",
    "mem[37047] = 4759",
    "mem[43376] = 833",
    "mem[53897] = 3261",
    "mem[62389] = 71090581",
    "mask = 0X101001011010101100011111X11X0111X0",
    "mem[39230] = 906",
    "mem[25233] = 3657471",
    "mem[7377] = 44247",
    "mask = 00101X010X1010101100000XX1011X0001X0",
    "mem[25241] = 291758",
    "mem[23845] = 1462440",
    "mem[51530] = 273094825",
    "mem[15135] = 30712212",
    "mask = XX1X1X011X1110101101100011101X110X00",
    "mem[16538] = 243646453",
    "mem[60552] = 27316",
    "mem[19220] = 1982193",
    "mem[31113] = 2444",
    "mask = 101011XX01X010101X0010XX00XX11000101",
    "mem[1172] = 24817491",
    "mem[15935] = 104503643",
    "mask = 1010XX0110111X10X1001010XX0000X000XX",
    "mem[8812] = 389608924",
    "mem[6230] = 12722765",
    "mem[5392] = 251053",
    "mem[25888] = 13081575",
    "mem[1704] = 158591",
    "mem[46201] = 13297",
    "mem[61316] = 943",
    "mask = 001001X111101X10110X01X0111000011110",
    "mem[37958] = 3378989",
    "mem[58790] = 16704",
    "mem[24122] = 423950643",
    "mask = 00X0X0010X0X1X111X001010X00101X01011",
    "mem[61319] = 1502",
    "mem[49739] = 5640",
    "mem[43144] = 101689290",
    "mask = 001000X1X1X1X111100X000X0X1X000X0010",
    "mem[59936] = 26771",
    "mem[50781] = 54614700",
    "mem[58566] = 10101",
    "mem[32495] = 361",
    "mem[32592] = 11958",
    "mem[50027] = 200985",
    "mem[59514] = 6947531",
    "mask = 0XX0X101011010101000X0X01110110X01X0",
    "mem[49739] = 794426",
    "mem[25462] = 8540549",
    "mem[43849] = 2037191",
    "mem[11862] = 80922734",
    "mem[15935] = 49909230",
    "mem[12097] = 9886926",
    "mem[16345] = 533565",
    "mask = 0110010XX11XXX10100001X0101011001001",
    "mem[34380] = 1226",
    "mem[46477] = 14011",
    "mem[13573] = 110921",
    "mask = 01101X0X01101010X000X100111X100X1011",
    "mem[17502] = 24422",
    "mem[53627] = 60689",
    "mem[26767] = 176156438",
    "mask = 00101X00111011X01X010010X111001XXX1X",
    "mem[35284] = 7683672",
    "mem[28519] = 957363766",
    "mask = 01X001X10X1X01101XX00111X110110X110X",
    "mem[2390] = 50690464",
    "mem[9515] = 36413",
    "mem[4966] = 455023",
    "mem[16345] = 4642",
    "mem[23940] = 967447277",
    "mask = 001011011X1010X00100X0X0X1000X001101",
    "mem[30362] = 492",
    "mem[39436] = 55771435",
    "mem[54750] = 4405963",
    "mem[12154] = 5316113",
    "mask = X01001X1111X1111XX0XX01001001X01010X",
    "mem[11861] = 8093273",
    "mem[5528] = 594330",
    "mem[2580] = 749",
    "mem[41339] = 2813480",
    "mask = 0X100X0101X010101010010X001110XX10X0",
    "mem[49739] = 25",
    "mem[56763] = 3225353",
    "mem[62676] = 82",
    "mask = 00X0010111100010X10X101010000X0XX11X",
    "mem[24711] = 19689",
    "mem[25883] = 1662",
    "mem[39685] = 1366",
    "mem[64022] = 31675243",
    "mask = 1010000110111X1XX1X1X00X1X100X000101",
    "mem[50781] = 138807",
    "mem[61134] = 212475189",
    "mask = 1X10000110111110010X00X010X000X00100",
    "mem[26767] = 521755660",
    "mem[43849] = 297",
    "mem[6773] = 56375",
    "mem[7440] = 6344",
    "mem[54750] = 375",
    "mask = 001001011110XX1X110XX0101XX0X1010X01",
    "mem[14512] = 116152715",
    "mem[1785] = 849605743",
    "mem[28216] = 741473",
    "mem[24722] = 98336",
    "mem[44689] = 10577",
    "mem[61134] = 96966",
    "mem[15075] = 68597",
    "mask = 1X00000XX11X10X11100101X001X001X1101",
    "mem[22210] = 7191",
    "mem[10538] = 441544661",
    "mask = 000X010111101110110010X1101XX01001X0",
    "mem[50023] = 5845123",
    "mem[9193] = 343236",
    "mem[14594] = 328315",
    "mask = 0010XX01X1X0101X10X0101010X011X00010",
    "mem[10568] = 213103847",
    "mem[35471] = 19909935",
    "mem[51052] = 198214667",
    "mem[33707] = 212943",
    "mem[18838] = 218437742",
    "mask = 1X10X00X11X1010101X1101X1110XX0X1100",
    "mem[29150] = 3702971",
    "mem[28145] = 781579",
    "mem[62509] = 517",
    "mem[44281] = 3796239",
    "mem[29845] = 72642510",
    "mem[7666] = 2181716",
    "mask = 101X100X1X11101X1X011X00X000000X0000",
    "mem[44068] = 3210156",
    "mem[34746] = 463",
    "mem[19733] = 150",
    "mask = 0010000101X0101X1100000X001X000111XX",
    "mem[51921] = 5582",
    "mem[8182] = 1826115",
    "mem[9247] = 159",
    "mem[62726] = 65701789",
    "mem[13992] = 293819555",
    "mask = 0010X0010X101X1011X00X110XX000011101",
    "mem[16844] = 508434281",
    "mem[48132] = 19312",
    "mem[57886] = 10241870",
    "mem[33326] = 5734",
    "mem[15821] = 61381475",
    "mem[2454] = 7235981",
    "mem[37695] = 4671",
    "mask = 101X1101010010X0100X0XX1110XX1X1110X",
    "mem[43877] = 2937",
    "mem[41115] = 438513",
    "mem[60412] = 12947",
    "mem[54334] = 556096",
    "mem[61587] = 3806",
    "mem[28680] = 5115",
    "mask = 0011000111X0X011000XXX1110X1X10X1X11",
    "mem[30303] = 2309",
    "mem[7287] = 126478",
    "mem[213] = 3432",
    "mem[32811] = 22838482",
    "mem[51164] = 13661",
    "mem[37058] = 63634172",
    "mask = X010X0011011101X1101X1X0000X00000X00",
    "mem[19037] = 78465",
    "mem[26276] = 710992554",
    "mem[64165] = 398875",
    "mem[50921] = 353203677",
    "mem[44064] = 1387869",
    "mask = 01XX110101X01X10X000001X00010001000X",
    "mem[43320] = 109786",
    "mem[55034] = 10048064",
    "mem[23862] = 1534456",
    "mem[26276] = 241328811",
    "mem[7886] = 2239",
    "mem[61998] = 107016",
    "mask = 0110110X01000110X0X01X11000011X01XX1",
    "mem[7377] = 671018",
    "mem[34883] = 808846",
    "mem[32738] = 277",
    "mem[27774] = 491651359",
    "mask = 1X1000X111111111110011101X10X0110111",
    "mem[41555] = 4053944",
    "mem[34829] = 751",
    "mem[50875] = 443892",
    "mask = XXX10001X110101110X0100X1X11X000100X",
    "mem[42467] = 95922687",
    "mem[33576] = 205350883",
    "mem[51342] = 12652555",
    "mem[12687] = 1796343",
    "mem[3136] = 107821",
    "mem[8430] = 21508842",
    "mask = X010XX01X11010101X001010X0X011XX0101",
    "mem[35499] = 968828445",
    "mem[44464] = 3653",
    "mem[5361] = 60058",
    "mem[30081] = 123907",
    "mask = 00111001X110X0101XXX00011001101X0X01",
    "mem[6862] = 20247901",
    "mem[27705] = 9416895",
    "mem[8766] = 1155691",
    "mem[48820] = 821601",
    "mem[16804] = 9608",
    "mem[8357] = 68479859",
    "mem[3679] = 6874765",
    "mask = 00X0X10X11101X10110X0X0010110X100110",
    "mem[19220] = 43510192",
    "mem[46054] = 12027499",
    "mem[44734] = 12928",
    "mem[64207] = 32793280",
    "mem[53919] = 788",
    "mem[61604] = 43110",
    "mask = 1XX000011X1X1X1X110X1X100X1010001011",
    "mem[26418] = 45221",
    "mem[35535] = 53651",
    "mem[51747] = 328535529",
    "mem[62676] = 675298",
    "mem[63077] = 248663921",
    "mask = 0X10X10X0100XX10100XXX11X00010001101",
    "mem[1281] = 5448838",
    "mem[53899] = 589128",
    "mem[60412] = 296",
    "mem[60829] = 3224999",
    "mem[47927] = 6185999",
    "mem[57442] = 2119",
    "mask = 1100000111101111110X10000000XX001X11",
    "mem[843] = 15340",
    "mem[10831] = 930479",
    "mem[46477] = 109098",
    "mem[48820] = 2088358",
    "mem[31113] = 8722",
    "mask = 1X100001X01XX1X01100001011000X01X101",
    "mem[29801] = 82058",
    "mem[26073] = 49617",
    "mem[64220] = 788",
    "mem[30409] = 62851693",
    "mem[36932] = 16032238",
    "mem[27496] = 7145",
    "mask = X010100111111X10110X1100001X1010X01X",
    "mem[44871] = 1176",
    "mem[30454] = 416371248",
    "mem[52631] = 311042",
    "mem[11862] = 960076",
    "mem[22356] = 256",
    "mask = 0010X1010X001010101010001X0X0X0010X1",
    "mem[9193] = 274",
    "mem[5787] = 47507",
    "mem[24647] = 807446",
    "mask = 001000010X1010101100X010001XX0001111",
    "mem[23915] = 4026",
    "mem[41555] = 1918531",
    "mem[54334] = 391383",
    "mem[34366] = 9256",
    "mem[1303] = 7754953",
    "mask = 101X110X01001X00X000X10001110X0X0100",
    "mem[56736] = 13339",
    "mem[56952] = 432959128",
    "mem[53279] = 656667",
    "mem[46365] = 2024606",
    "mem[65212] = 15190",
    "mem[11342] = 42370426",
    "mask = 00100X0000011111XX00XX01X1X10010000X",
    "mem[48859] = 13295465",
    "mem[13701] = 1119634",
    "mem[61592] = 60623405",
    "mask = X0101XX101101010X100010X010101010100",
    "mem[43417] = 214737",
    "mem[35728] = 2015",
    "mem[28668] = 448775513",
    "mem[58101] = 3296",
    "mem[28096] = 2626693",
    "mem[65358] = 59779358",
    "mask = 1010X10XX11010X01X0010X0100X10110110",
    "mem[31600] = 571",
    "mem[20168] = 261939",
    "mem[8575] = 3237",
    "mem[18097] = 12166",
    "mem[29592] = 293500",
    "mem[48171] = 676",
    "mem[16380] = 2093",
    "mask = 1X100101X100101XX0X01001100X11101111",
    "mem[31473] = 1160",
    "mem[14821] = 237",
    "mem[11809] = 153714176",
    "mem[37695] = 39507135",
    "mem[55555] = 171731",
    "mem[30757] = 3238878",
    "mem[5787] = 363",
    "mask = 001011X1X100111010X01X10101010001000",
    "mem[143] = 147026133",
    "mem[15841] = 2748727",
    "mem[58986] = 108963",
    "mem[42804] = 21362",
    "mask = 001X10000X10100XX000100101110X001X00",
    "mem[21444] = 118026",
    "mem[18464] = 18560",
    "mem[13838] = 1005630",
    "mem[4380] = 194314",
    "mask = 0110110101XX1X1X10XX010X11X0X0000110",
    "mem[2974] = 3177",
    "mem[19734] = 44943565",
    "mem[27376] = 71889",
    "mask = X110X1X10110101010X0000010100X01X000",
    "mem[59987] = 195313",
    "mem[12183] = 28345",
    "mem[5495] = 47272",
    "mem[19742] = 8940"
];

// Part 1
let mask = "";
let mem = [];
for (const line of input) {
    if (line.startsWith("mask"))
        mask = line.slice(7);
    if (line.startsWith("mem")) {
        const [index] = line.slice(4).split("]");
        let value = parseInt(line.split(" = ")[1], 10).toString(2)
            .padStart(mask.length, "0")
            .split("");
        mask.split("").forEach((char, i) => {
            if (char !== "X")
                value[i] = char;
        });
        value = value.join("");
        mem[index] = parseInt(value, 2);
    }
}
console.log(mem.reduce((a, b) => a + b));

// Part 2
mem = new Map();
mask = "";
for (const line of input) {
    if (line.startsWith("mask")) {
        mask = line.slice(7);
    } else if (line.startsWith("mem")) {
        const value = parseInt(line.split(" = ")[1], 10);
        const index = parseInt(line.slice(4).split("]")[0], 10).toString(2)
            .padStart(mask.length, "0")
            .split("");
        mask.split("").forEach((char, i) => {
            if (char === "1" || char === "X")
                index[i] = char;
        });
        const indexes = [];
        for (let i = 0; i < 2 ** index.filter((x) => x === "X").length; ++i) {
            const currentIndex = [];
            const bin = i.toString(2).padStart(index.filter((x) => x === "X").length, "0");
            let j = 0;
            index.forEach((char) => {
                if (char === "X") {
                    currentIndex.push(bin[j]);
                    ++j;
                } else {
                    currentIndex.push(char);
                }
            });
            indexes.push(parseInt(currentIndex.join(""), 2));
        }
        indexes.forEach((x) => mem.set(x, value));
    }
}
console.log([...mem.values()].reduce((a, b) => a + b));
