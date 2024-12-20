// https://adventofcode.com/2020/day/4
/* eslint-disable max-lines, prefer-named-capture-group */

const input = `byr:2010 pid:#1bb4d8 eyr:2021 hgt:186cm iyr:2020 ecl:grt

pid:937877382 eyr:2029
ecl:amb hgt:187cm iyr:2019
byr:1933 hcl:#888785

ecl:hzl
eyr:2020
hcl:#18171d
iyr:2019 hgt:183cm
byr:1935

hcl:#7d3b0c hgt:183cm cid:135
byr:1992 eyr:2024 iyr:2013 pid:138000309
ecl:oth

ecl:hzl
hgt:176cm pid:346059944 byr:1929 cid:150 eyr:1924 hcl:#fffffd iyr:2016

iyr:2011
cid:99 ecl:amb
eyr:2030 hcl:#18171d
hgt:165cm pid:897123249 byr:1948

hcl:#cfa07d pid:827609097 ecl:gry iyr:2017 byr:1963
eyr:2029 hgt:72in

hcl:#6b5442 eyr:2028 iyr:2016 ecl:hzl
hgt:152cm
pid:432183209 byr:1984

hgt:169cm hcl:#888785 ecl:hzl pid:626107466 byr:1929 iyr:2013 cid:217
eyr:2026

hcl:#bdb95d byr:1935 eyr:2023 ecl:blu iyr:2011 cid:90 hgt:64cm
pid:155167914

iyr:2017
byr:1943 cid:56
hcl:#888785 hgt:193cm pid:621305634
ecl:amb
eyr:2024

ecl:gry
hcl:#a97842 pid:936999610 cid:169 byr:1991 eyr:2029 hgt:175cm iyr:2017

hcl:#866857 ecl:gry
byr:1975 hgt:71in
pid:180628540 eyr:2020
iyr:2017

hcl:#cfa07d hgt:153cm byr:1962 cid:325
iyr:2018 eyr:2020
ecl:amb pid:579364506

hcl:#6b5442 iyr:2010 ecl:amb byr:2001
eyr:2020 pid:406219444
hgt:173cm

pid:#430c70
ecl:gry iyr:2018 hcl:#866857 eyr:2021 cid:97 byr:1997
hgt:75cm

iyr:2023 pid:#518780
eyr:2034
ecl:zzz
hgt:72cm
hcl:z byr:2010

pid:1961614335 hcl:#c0946f hgt:157 ecl:grn eyr:2031 byr:1972 iyr:1992

cid:142
eyr:2022 ecl:amb
hgt:68in
hcl:#6b5442 byr:1927 pid:112372155 iyr:2012

byr:1972
hgt:169cm
hcl:#888785
cid:75 iyr:2015 eyr:2021 ecl:oth
pid:7889059161

ecl:brn
iyr:2020
eyr:2026 hgt:151cm byr:1961 pid:468038868 hcl:#18171d

ecl:blu
hcl:#b6652a
byr:1959
hgt:151cm cid:109 pid:708689901
eyr:2026 iyr:2012

ecl:grt byr:2024 iyr:1995 pid:225263933 hcl:z
eyr:2040 hgt:127 cid:162

pid:683129831 cid:144
hcl:#a97842 hgt:155cm eyr:2030 byr:1962
iyr:2015
ecl:oth

byr:2009 hcl:#866857 cid:329 iyr:1955
eyr:1994 pid:085929595

byr:1940
pid:936748944 hgt:160cm eyr:2024 iyr:2013 cid:205
ecl:grn hcl:#c0946f

hgt:193in cid:161 iyr:1984
pid:#f82e35
byr:2018
hcl:b1a551 eyr:2014 ecl:#4d2d5b

byr:1978
iyr:2011 hgt:172cm hcl:#efcc98 ecl:brn pid:759624394 eyr:2020

eyr:2020 pid:622444743
hcl:#a97842
ecl:gry iyr:2014 hgt:157cm byr:1980

hgt:181cm eyr:2020
iyr:2014
hcl:#602927 ecl:brn byr:1934

hgt:188cm
ecl:blu eyr:2029 pid:757878469 hcl:#b6652a iyr:2017

byr:1995 ecl:blu hcl:#341e13 eyr:2027 iyr:2020 pid:283341241
hgt:174cm

byr:1960 iyr:2012 hcl:dc007d eyr:2011 hgt:166cm
pid:9889788504
ecl:#a9b3a1

ecl:hzl hgt:70in pid:620966688 iyr:1998 hcl:z
eyr:2022

hgt:187cm cid:190 pid:818634983 byr:1925 ecl:gry hcl:#ceb3a1
eyr:2021 iyr:2015

hcl:#c0946f iyr:2017
byr:1953 eyr:2030 hgt:67in pid:085876735 ecl:hzl

pid:205284134
hcl:#cfa07d byr:1987 hgt:167cm
eyr:2022 ecl:oth iyr:2020

iyr:2018
hgt:180cm pid:232535961 eyr:2027 byr:1999
hcl:#18171d ecl:oth

cid:342 hgt:171cm ecl:blu byr:1920 hcl:#18171d eyr:2023 iyr:2012
pid:353601791

byr:1956
ecl:brn pid:141896408 iyr:2012 cid:116 eyr:2028 hgt:164cm
hcl:#866857

hcl:#fffffd ecl:oth eyr:2030 hgt:67in pid:855777018 byr:1975
iyr:2012

ecl:blu pid:45257034 hcl:#c5447e iyr:1928 cid:212 byr:1974

pid:080116868 cid:97 eyr:2021 iyr:2020 ecl:grn byr:1987 hgt:62in hcl:#efcc98

eyr:2027 hcl:#efcc98 iyr:2020 ecl:amb cid:111
pid:143966954
hgt:165cm

iyr:2015 byr:1941 pid:798564127
hgt:183cm ecl:oth eyr:2020

byr:1999
iyr:2017 hcl:#ceb3a1
pid:640883740 hgt:164cm
cid:105 ecl:hzl
eyr:2022

iyr:2014 eyr:2023
ecl:grn hcl:#ceb3a1
hgt:188cm byr:1981 pid:185076942 cid:342

hgt:150cm
iyr:2013 eyr:2035 cid:184 hcl:#341e13 pid:#e2dd63 byr:2014 ecl:brn

eyr:2024 iyr:2015 ecl:brn hgt:76in
hcl:#866857 byr:1958
pid:886486245

ecl:amb cid:113 byr:1931 pid:087380735
iyr:2010
eyr:2028
hgt:161cm

byr:1926 eyr:2024 iyr:2012 pid:036335738 hcl:#c0946f hgt:153cm ecl:brn

hcl:bf952a
hgt:169in
eyr:1925 pid:166cm iyr:2028 ecl:lzr byr:1938

hgt:154cm hcl:#733820 ecl:oth iyr:2016
byr:1925
eyr:2020 pid:590365390

eyr:2029 hgt:166cm pid:670283165
hcl:#ceb3a1 iyr:2018
byr:1955
ecl:gry

hgt:181cm
iyr:2016 hcl:#866857 byr:1933
eyr:2028 ecl:blu

hgt:184cm
cid:138 hcl:#623a2f
pid:081880232
byr:1929 ecl:hzl eyr:2030
iyr:2015

pid:825698872
eyr:2026 hgt:181cm iyr:2015 hcl:#866857 byr:1950 ecl:gry

eyr:2022 byr:2002 iyr:2013 hcl:#fffffd ecl:hzl pid:687380398
hgt:173cm

byr:2016 ecl:zzz pid:0514910377 hcl:ebe8b2 eyr:2025
iyr:2011 hgt:183cm

ecl:amb hgt:67in
pid:602547016 byr:1985
eyr:2021
iyr:2014

iyr:2014 eyr:2020 ecl:grn pid:642261584
byr:1970 hgt:190cm cid:278 hcl:#7d3b0c

eyr:2035 cid:226 hcl:64ac73
byr:2007
pid:176cm ecl:#927fbf iyr:2006

iyr:2019 eyr:2026 ecl:brn hgt:162cm
cid:108
hcl:#ceb3a1 pid:774441166 byr:1951

hgt:166cm eyr:2024 hcl:#b6652a byr:1934 pid:260873380 iyr:2016

hcl:z
iyr:2015 ecl:blu
eyr:2040 byr:1927 pid:431855667
hgt:173cm
cid:209

eyr:2034 cid:139
ecl:#cb7564
byr:2023 hgt:172in iyr:2027 pid:2877047600

ecl:brn
cid:125 hcl:#888785
iyr:2011 pid:739399822 hgt:184cm byr:1989

hcl:#c0946f
pid:891125961
hgt:175cm
iyr:2010 eyr:2027 ecl:gry
byr:1930

hgt:164cm byr:1935 eyr:2023 pid:684366743
ecl:oth
hcl:#18171d iyr:2013

hcl:#341e13 hgt:64in byr:1959 ecl:#c53bbb iyr:2014 eyr:2029 pid:174cm

eyr:1943 ecl:#e52638
hcl:06a964 byr:1959 cid:342 iyr:2029 hgt:178in pid:150cm

byr:1966 hcl:#733820 iyr:2020
ecl:gry eyr:2021 pid:229789071

pid:363947487
ecl:blu
hcl:#623a2f
byr:1972
iyr:2017 hgt:184cm
eyr:2023

ecl:oth pid:460855562
iyr:2010 cid:148 hcl:z hgt:74cm byr:2005

eyr:2027 iyr:2017 hgt:172cm
byr:1975
ecl:amb cid:97 hcl:#c0946f pid:591950054

eyr:2022 ecl:oth hgt:185cm
hcl:#6b5442
byr:1978
iyr:2018 pid:849124937 cid:78

iyr:1927 hgt:121
eyr:2020 ecl:#c73b1a hcl:#cfa07d pid:4505701953 byr:2020
cid:235

hgt:183cm hcl:#341e13 iyr:2019 byr:1932 ecl:#144539
pid:184cm eyr:1954

iyr:2020 cid:332 byr:1930 hcl:#6b5442 hgt:168cm ecl:amb
eyr:2023 pid:332084752

ecl:blu
byr:1922 cid:135 iyr:2019 eyr:2028 pid:481801918
hcl:#efcc98 hgt:76in

ecl:grn pid:188906975 cid:153 hgt:173cm eyr:2029 iyr:2012 hcl:#733820 byr:2001

eyr:2029
byr:1948 iyr:2020
hgt:167cm ecl:brn hcl:#623a2f pid:577624152

hcl:#18171d
pid:262528276 byr:1949
iyr:2020
eyr:2023

hcl:#c0946f iyr:2016 byr:1967 ecl:brn
hgt:162cm
pid:139002508 eyr:2030

eyr:2030
hgt:72in iyr:2013 pid:542944485 cid:112
byr:1950 hcl:#a97842 ecl:amb

pid:772544664 eyr:2023 ecl:gry hgt:159cm iyr:2012
byr:1956 hcl:#602927

hgt:172in ecl:grt pid:668387651 byr:2019
iyr:1995 hcl:bc51ff eyr:1921

pid:322272953 ecl:brn hcl:#a97842 byr:1990
eyr:2021
iyr:2017
hgt:181cm

eyr:2029
iyr:2011
pid:503169142 byr:1980
hcl:#a97842 ecl:oth

pid:514042929
ecl:amb eyr:2030 hgt:154cm
iyr:2010 hcl:#623a2f
byr:1989

byr:1988 pid:156381939 iyr:2016 hgt:161cm eyr:2030 ecl:brn hcl:#7d3b0c

pid:545819361 hgt:191cm iyr:2012 byr:1982 eyr:2025 ecl:zzz
hcl:z

pid:872911892
byr:1924 iyr:1974
hcl:#602927
ecl:brn hgt:154cm
eyr:2028

hcl:#602927 hgt:188cm
byr:2007 pid:503933918 ecl:utc
eyr:2030 iyr:2020 cid:132

ecl:hzl
eyr:2020 hcl:#888785 hgt:181cm
pid:721383537
iyr:2018
byr:1983 cid:50

pid:8590606 hcl:#18171d
eyr:2039 iyr:2024
cid:161 byr:2027

hgt:160in byr:1956
cid:214 pid:187cm iyr:2027
hcl:z
eyr:2033 ecl:grn

byr:2029 pid:90562860 hcl:4fa0d1 iyr:2024
eyr:2040 cid:62 ecl:#07ae33 hgt:186in

pid:557319679 byr:1945 hgt:182cm eyr:2026 iyr:2012 hcl:#866857 ecl:hzl cid:219

eyr:2028 iyr:2022 ecl:zzz cid:273
hgt:133 pid:4084335529 byr:2011 hcl:z

pid:69196974 hcl:z iyr:2014 ecl:amb byr:1928

hgt:183in
eyr:2028 pid:771762218 byr:2003 ecl:dne hcl:70eb58 iyr:2027 cid:330

ecl:hzl pid:195721774 hcl:#602927 byr:1945 hgt:186cm
eyr:2037
iyr:2011

ecl:brn eyr:2028 hgt:171cm
byr:1980 hcl:#fffffd pid:563089389 iyr:2016

eyr:2027 iyr:2011 ecl:gry byr:1932 hcl:#18171d
pid:398526372

pid:97363921 hgt:178cm
ecl:oth eyr:2028
byr:1930 cid:345 iyr:2018 hcl:#1fb2f0

ecl:amb iyr:2012
byr:1961 pid:679312513 eyr:2026 hcl:#cfa07d
hgt:174cm

byr:1980
hcl:#80055d
cid:235
ecl:oth pid:159696517 eyr:2030
hgt:191cm
iyr:2012

iyr:2013 eyr:2027 hcl:#866857
pid:621184472 cid:137 hgt:175cm byr:2000
ecl:hzl

byr:1998 hgt:166cm
ecl:oth eyr:2025
iyr:2018
hcl:#a97842 pid:358495679

byr:1928 ecl:oth cid:122 hcl:#6b5442
hgt:189cm eyr:2020 iyr:2018

hgt:186cm
byr:2020 hcl:79d685 ecl:grt iyr:1944 pid:3659998623 eyr:2000

hgt:63in ecl:oth eyr:2029
iyr:2013 pid:942282912 hcl:#c0946f byr:1989

byr:1997 hcl:#623a2f eyr:2026 cid:149
pid:702981538
ecl:amb hgt:178cm iyr:2017

ecl:brn iyr:2015 byr:1932 pid:191192548 cid:318
hcl:#7d3b0c eyr:2020

hcl:#866857 eyr:2028 pid:341036511 cid:343 iyr:2020 hgt:173cm
byr:1973 ecl:blu

iyr:2016 pid:165707654 hgt:181cm ecl:hzl
cid:119 byr:1973 hcl:#b6652a

iyr:2014 pid:833337583 byr:1936 cid:91 hcl:#602927 ecl:amb hgt:165cm
eyr:2021

byr:1938 ecl:grn hcl:#a55daf eyr:2021 cid:199 pid:701515796
iyr:2015 hgt:71in

hcl:#a97842
ecl:blu
eyr:2030 iyr:2020
hgt:155cm byr:1927
pid:524488639

pid:385084163 eyr:2025
hcl:#866857 ecl:oth iyr:2020 hgt:177cm byr:2002

eyr:2029 hgt:177cm
cid:142 ecl:hzl hcl:#866857
iyr:2015 byr:1946 pid:459543573

pid:826977286 eyr:2030 iyr:2016 byr:1996
hcl:#efcc98
ecl:gry hgt:180cm

eyr:2029
iyr:1976 pid:872821863 ecl:gry byr:2030

hgt:191cm byr:1924 pid:918753019 ecl:blu
iyr:2019 hcl:#5d69e0 eyr:2024

ecl:lzr iyr:2020 pid:991375034 byr:1947
eyr:1923 hcl:8224f6 hgt:157

eyr:2021 byr:1946
hgt:189cm ecl:grn iyr:2010 hcl:#cfa07d pid:246923037

iyr:2016
ecl:oth hgt:155cm byr:1962 pid:924702739 eyr:2028 hcl:#7d3b0c

pid:7358100461 hgt:183cm byr:2011 hcl:#a97842
iyr:2020 eyr:1963 cid:71

ecl:hzl hcl:#c0946f
byr:1934
hgt:183cm
iyr:2018 pid:433993423 eyr:2028

hgt:183cm hcl:#cfa07d iyr:2018
byr:1975 eyr:2024

eyr:2021 ecl:amb byr:1992 hgt:164cm iyr:2020
cid:302

pid:271720491 hgt:161cm
iyr:2012 byr:1947 hcl:#6b5442 ecl:grn eyr:2024

pid:860852799 eyr:2021 byr:1980 hcl:#6b5442 iyr:2010 hgt:174cm
ecl:hzl

hcl:#623a2f eyr:2028 iyr:2016 pid:813453232 hgt:173cm cid:131
byr:1962

byr:1975
hgt:177cm
pid:290098810 cid:241
ecl:oth hcl:#a5fc9f eyr:2021 iyr:2013

byr:1947 pid:762351259 hgt:178cm ecl:amb hcl:#d07b27 iyr:2017 eyr:2028 cid:271

iyr:2012 pid:053790533 eyr:2023 ecl:grn hcl:#623a2f byr:1939 cid:70 hgt:189cm

hcl:#c0946f pid:891312170 byr:1986 iyr:2012
hgt:163cm eyr:2023 cid:150

iyr:2015
byr:1963
pid:695024197 hcl:#efcc98 ecl:brn hgt:166cm eyr:2022
cid:276

eyr:1945 hgt:150in byr:2007
ecl:utc hcl:z cid:272
pid:186cm iyr:1927

pid:956296646 iyr:2015 hgt:168cm
byr:1979 eyr:2029 ecl:gry hcl:#866857

pid:745452488 byr:1998 eyr:2025 hcl:#602927
hgt:158cm iyr:2015

eyr:2027
iyr:2017
pid:6173634679 byr:2001 ecl:hzl
hcl:babc41
hgt:76cm

ecl:grn
iyr:2019
hcl:#3881ca byr:1975 eyr:2023 hgt:162cm

hcl:#ceb3a1 hgt:169in pid:398759957
eyr:2020 byr:2016
iyr:2011 ecl:#be3622

hgt:156cm
hcl:#b6652a pid:166cm iyr:2027 byr:2003
eyr:2036 ecl:#6d4df1
cid:109

eyr:2026 pid:295161300 ecl:gry
hgt:160cm byr:1950 hcl:#746f08
iyr:2017

iyr:2010 cid:335
eyr:2024
hcl:#866857
byr:1948 hgt:166cm pid:178927953
ecl:blu

hgt:161cm cid:210 eyr:2025
byr:1920
ecl:gry iyr:2020
hcl:#7d3b0c pid:443548961

iyr:2019
pid:320015839 eyr:2029
hcl:#fffffd ecl:oth byr:1953 hgt:182cm

eyr:2038 hcl:abb3ad iyr:2015 pid:174cm hgt:167cm
ecl:hzl

byr:1982 pid:798153758
ecl:brn
hgt:161cm hcl:#341e13 eyr:2023
iyr:2014

byr:1938
pid:193cm hgt:190cm ecl:amb iyr:2019
eyr:2028 cid:270
hcl:#18171d

pid:711886098 byr:1962
eyr:2028 ecl:grn
hgt:151cm
hcl:#cfa07d
iyr:2019

eyr:2028 iyr:2011
ecl:gry
pid:550207629 hgt:183cm
hcl:#888785 byr:1920 cid:96

ecl:utc
eyr:2021
byr:1962 hgt:175cm
pid:872298092
hcl:z iyr:2017 cid:197

iyr:2010
hcl:5b88b0 byr:2021 ecl:gmt
eyr:2040 hgt:179cm pid:161cm

pid:56869473 eyr:2036 ecl:lzr
iyr:2027 hcl:z

hcl:#602927
hgt:151cm pid:780342729 ecl:oth iyr:2015

byr:2027 hcl:#fffffd
pid:5609758115 eyr:2037
iyr:2017
ecl:#6f0329 hgt:97

iyr:2025 hcl:z byr:2007 ecl:gmt
pid:#eda9ab
hgt:154in eyr:2028 cid:247

ecl:utc pid:216181141
hgt:161cm eyr:2026
hcl:#d38f20 byr:2028

ecl:grn byr:1955 hcl:#c0946f
iyr:2017 eyr:2027 pid:746303487
hgt:72in

pid:489225602
iyr:2018 ecl:gry hgt:65in byr:1982
cid:248
eyr:2025

hcl:#ceb3a1 pid:663798116 byr:1937 iyr:2010
hgt:167cm ecl:hzl

pid:329032527
hcl:#ceb3a1
iyr:2014 ecl:gry
hgt:169cm
byr:1932

hcl:#545d0c
ecl:brn iyr:2023 hgt:186cm cid:209
pid:886392748
eyr:2030 byr:1984

hgt:80 iyr:1943 hcl:#733820 byr:1937 eyr:2029 pid:625851706 cid:309

pid:73586582 hgt:156
cid:162 ecl:zzz eyr:2025
iyr:1990 byr:1940 hcl:z

iyr:2010
eyr:2023 pid:162901454
hcl:#733820 byr:1958 ecl:gry
hgt:159cm

byr:2007
hcl:#cfa07d
cid:261 pid:148538600 ecl:hzl
hgt:64cm iyr:2021
eyr:2040

iyr:1997 byr:2007 ecl:#24adc8
pid:55794137 cid:219 eyr:2037
hgt:75cm hcl:z

hcl:#efcc98 byr:1940 ecl:amb iyr:2012
pid:594237790 eyr:2029 cid:112
hgt:173cm

byr:1941 cid:70 eyr:2026 hgt:178cm hcl:#733820
ecl:brn iyr:2013 pid:425263722

eyr:2025 byr:1998 iyr:2014 ecl:amb pid:188113611 hcl:#341e13

byr:1950
iyr:2017 hgt:74in cid:238
pid:897969952
ecl:hzl eyr:2022 hcl:#0a18bb

eyr:2022
iyr:2015 ecl:grn
hgt:179cm byr:1956 hcl:#7fd789 pid:201629099

eyr:2024
pid:483257417 ecl:hzl iyr:2010 hgt:159cm
hcl:z
byr:1968

pid:916586207 ecl:amb iyr:2011 eyr:2022 hgt:191cm hcl:#602927 byr:1923

pid:175608183
hgt:190cm hcl:#fffffd iyr:2017 byr:1993
ecl:blu

eyr:2029 hgt:173cm
pid:669662258 byr:1997 iyr:2015 ecl:brn cid:153 hcl:#888785

hcl:d899cf
ecl:#876029 hgt:76cm iyr:1997 pid:40406158
eyr:2032 byr:2010

eyr:2023 ecl:hzl cid:162 hcl:#602927 iyr:2015
pid:82885029
hgt:75cm byr:1946

byr:1962 hgt:167in
ecl:brn
hcl:#c0946f iyr:2014 pid:488520708 eyr:2027 cid:271

hgt:180cm pid:358771245 eyr:2020
ecl:grn iyr:2018 hcl:#efcc98
byr:1979

cid:273 ecl:gry pid:424388351 iyr:2010 hcl:#c0946f byr:1988
hgt:166cm
eyr:2027

ecl:gry hcl:#a97842 hgt:189cm
pid:743213778 iyr:2015 byr:1959

iyr:2021 byr:2021
ecl:#a79d2e cid:89
hcl:#5fb8d7 eyr:2001 pid:#5575b3 hgt:60cm

eyr:2021
iyr:2017
cid:87 hgt:164cm pid:560394910 ecl:hzl hcl:#ceb3a1
byr:1955

iyr:2018
hcl:#27f7e6 hgt:160cm
eyr:2029 pid:033692111
ecl:amb byr:1920

hgt:160cm eyr:2028 iyr:2010 ecl:blu byr:1974 pid:858060501 hcl:#733820

byr:1961 pid:818700605 cid:93 eyr:2024
hgt:188cm hcl:#866857
ecl:gry

eyr:2029
hgt:180cm iyr:2017
ecl:hzl byr:1951 cid:158
hcl:#888785

cid:290
eyr:2027 byr:1986
ecl:blu
pid:076339632 iyr:2010
hcl:#341e13
hgt:167cm

eyr:2023 iyr:1990
hcl:#623a2f byr:2005 hgt:116

hgt:167in iyr:1944 ecl:dne eyr:2031 hcl:465775 pid:2505694463

cid:93 eyr:2024 iyr:2010
hgt:143 pid:154cm
ecl:#c6f352
hcl:#a97842 byr:1925

pid:600685520 byr:1967 hcl:#ceb3a1 iyr:2014 ecl:oth cid:226 hgt:179cm eyr:2026

hcl:#ceb3a1
pid:789956738
byr:1938 hgt:171cm cid:183 eyr:2021 iyr:2011 ecl:amb

hcl:#613f4b hgt:151cm eyr:2025
ecl:amb byr:1985 pid:493339889
iyr:2013

hcl:78cda6 pid:36823553
iyr:2021 cid:235 byr:2028 eyr:2011 hgt:113
ecl:#02ce86

pid:529274811
iyr:2012 hgt:103 ecl:blu hcl:#341e13 eyr:2023
byr:1959

hgt:166cm iyr:2014 ecl:xry cid:276 byr:2014 hcl:#7d3b0c pid:146851133

pid:359823289 hgt:181cm byr:1978 hcl:#c0946f
eyr:2022
iyr:2011 ecl:hzl

pid:029400877
eyr:2026
byr:1983 iyr:2015 hcl:#cfa07d cid:70 ecl:gry

hcl:#ceb3a1 eyr:2021 hgt:190cm
ecl:amb iyr:2017
pid:411804678 byr:1950

byr:1926 iyr:2017 ecl:blu pid:103821113 eyr:2026 hcl:#c0946f cid:71 hgt:152cm

cid:108 byr:1955
iyr:2010 eyr:2022 hgt:169cm hcl:#733820
pid:208715596 ecl:gry

pid:352807405 ecl:blu
hcl:#b1214c iyr:2012 hgt:165cm byr:1929
cid:139
eyr:2020

hcl:#cfa07d hgt:151cm byr:1987
eyr:2024
cid:140 pid:884441477

pid:#dade9c eyr:1979 hgt:191cm
byr:2026 iyr:2018 hcl:z ecl:lzr

cid:259
pid:644561358
ecl:blu hgt:164cm iyr:2013 byr:1997
eyr:2023 hcl:#108f16

ecl:oth
cid:141 hgt:66in pid:877258886 iyr:2019 byr:1949 hcl:#18171d
eyr:2027

byr:1932 cid:103 hgt:175cm pid:464473181 ecl:xry iyr:2013 hcl:51fd65

cid:175 iyr:2014 eyr:1959
ecl:#d83076 hgt:182cm pid:863972537 hcl:#efcc98 byr:1986

hgt:181cm pid:869641194 hcl:#efcc98 cid:141 ecl:gmt iyr:2017 byr:1981 eyr:2027

eyr:1938
iyr:2026 cid:278 ecl:brn byr:1936 hgt:150 pid:6902040050

eyr:2027 iyr:2014 pid:110887179
hcl:#a97842 ecl:brn cid:262 hgt:66in
byr:1954

ecl:grn
pid:498972747
eyr:2024 hcl:#341e13 iyr:2011 byr:1932 hgt:186cm

cid:59
hcl:#6b5442 iyr:2018 eyr:2028 pid:866696485
hgt:178cm ecl:gry

pid:598961001
eyr:2024 iyr:2019
byr:1963 ecl:grn
hcl:#c0946f

eyr:2024 hgt:172cm pid:295056305 ecl:blu byr:1926
iyr:2017 hcl:#341e13

byr:2001 hcl:#6b5442 hgt:164cm
pid:862982189 ecl:grn iyr:2019 eyr:2030

hgt:69cm eyr:2014 ecl:hzl iyr:2025
hcl:2812c9
cid:74 byr:1980

hcl:#888785
pid:409489862
iyr:2011 hgt:186cm ecl:gry byr:1985
eyr:2028

cid:221 pid:6849250876 hgt:169cm hcl:z
iyr:2013
byr:1950 eyr:2022

pid:189083891 byr:1983 hcl:#623a2f ecl:hzl iyr:2013 eyr:2026 hgt:66in

pid:581546673 cid:269 eyr:2030 hgt:191cm byr:1945 hcl:#18171d
iyr:2015
ecl:amb

hgt:158cm ecl:hzl
cid:234 eyr:2023
byr:1996 hcl:#7ac7ad
iyr:2020 pid:666748924

iyr:2013 ecl:grn cid:53 hgt:172cm eyr:2028 pid:406602771 hcl:#fffffd byr:1959

hgt:63cm hcl:eaaf60 byr:2026 iyr:1981
pid:#baf2cf cid:117 ecl:hzl

eyr:2035 byr:2014
iyr:2028 hcl:z ecl:#acd426
cid:261 pid:174cm hgt:182in

ecl:amb pid:#4bb0a8 eyr:2027 hgt:155cm hcl:#623a2f
byr:1956
iyr:2011

eyr:2012 cid:53 byr:2005 ecl:oth
hgt:183in iyr:1974 pid:150cm

iyr:2020 pid:833821322 ecl:blu byr:1944 hgt:169cm hcl:#623a2f eyr:2020

hgt:60in ecl:oth byr:1962 eyr:2022 cid:99
iyr:2019
pid:281039464 hcl:#733820

ecl:hzl hcl:#7d3b0c hgt:191cm pid:771871096
iyr:2012 eyr:2027
byr:2025

hgt:188in hcl:z eyr:2032 iyr:1955
byr:2027 ecl:#517bfe pid:#206bab

hcl:#733820 iyr:2010 pid:784128823
hgt:169cm cid:305
ecl:grn byr:1962

cid:50 eyr:2022
hcl:a916cf pid:407148034 iyr:1926 ecl:#fa1ba7 hgt:69
byr:2028

hgt:193cm pid:507697987 cid:275 byr:1958 eyr:2023 ecl:brn iyr:2013 hcl:#326596

eyr:2025 hgt:192cm cid:95 iyr:2011 ecl:grn byr:2002 pid:399623583 hcl:#b6652a

ecl:brn hcl:#602927 eyr:2023 pid:089068603 hgt:189cm
byr:1953 iyr:2018
cid:160

hcl:f1bf94 byr:2030
ecl:gry hgt:60in iyr:2016
pid:4816152

hgt:154cm iyr:2015 ecl:gry
eyr:2024 pid:718845487 byr:1999
hcl:#866857

cid:294
hgt:186cm eyr:2026 byr:1984
ecl:grn
hcl:#ceb3a1 pid:325370778 iyr:2010

pid:156980004 hcl:#c0946f iyr:2013 ecl:brn
hgt:181cm byr:1933 eyr:2023

hcl:#efcc98 byr:2002 hgt:158cm ecl:gmt iyr:1964 pid:195262032
eyr:2021

hcl:#602927 eyr:2027 hgt:192cm byr:1945 iyr:2018 pid:366509171 ecl:oth

pid:163cm iyr:2016 ecl:lzr hcl:#341e13 hgt:79
cid:130
eyr:2038 byr:2030

hcl:#efcc98
byr:1979
ecl:oth eyr:2020 pid:095314628
hgt:162cm iyr:2015

byr:1998 cid:157
pid:346442779 hcl:#b6652a hgt:162cm
ecl:amb
eyr:2023 iyr:2018

hcl:#d6a701 byr:1971 hgt:160cm ecl:#98c896 pid:627704105 eyr:2024 iyr:2010

byr:2021
iyr:2023
eyr:1981 hgt:68cm ecl:dne
hcl:z pid:20981493

pid:159037919 hgt:162cm
ecl:amb cid:244
byr:1971 eyr:2027
iyr:2017 hcl:#18171d

iyr:2011 pid:086826874
cid:162
hgt:189cm ecl:gry
byr:1926 hcl:#888785

eyr:2022 hgt:152cm pid:919970712 byr:1955 hcl:#733820 iyr:2018 ecl:brn

cid:111 ecl:#a1843f
byr:2015 hcl:z iyr:1956
pid:186cm eyr:2030

byr:1991
eyr:2024 pid:050818633
hcl:#888785 cid:124 hgt:176cm ecl:gry iyr:2018

byr:1963 hgt:188cm
eyr:2021 cid:255
ecl:oth
hcl:#a97842
iyr:2010 pid:030540064

byr:1921 hgt:164cm pid:748078322 hcl:#c0946f ecl:blu
eyr:2027
iyr:2020

eyr:2020 cid:214 hcl:7a942e hgt:191cm byr:1998 iyr:2012 ecl:grn pid:054135231

eyr:1927 pid:242147946 iyr:2010
hcl:ea3cb1 byr:2028
hgt:186cm ecl:dne

ecl:brn hcl:#efcc98 eyr:2021
hgt:160cm pid:333644730 byr:1999
iyr:2019

iyr:2013 byr:1921
hcl:#a97842 eyr:2027
ecl:gry hgt:157cm pid:682013109

ecl:gry hcl:#733820 byr:1945 hgt:174cm
eyr:2020 pid:505827627 iyr:2019

eyr:2021 iyr:2015 ecl:oth hgt:162cm pid:137342936 byr:1922 hcl:#888785

hcl:#efcc98
ecl:oth
hgt:151cm cid:312 byr:1983
eyr:2030 pid:289512908 iyr:2020

byr:1989 iyr:2015 pid:057335770 ecl:grn eyr:2022 hgt:167cm hcl:#602927

hgt:184cm iyr:2013 hcl:#c0946f byr:1969 eyr:2028
pid:802041641
ecl:brn

pid:155cm hcl:#b6652a cid:288 byr:2028 iyr:2028 hgt:150cm
ecl:#996e72 eyr:1960

eyr:2020
iyr:2011
pid:934576102 byr:1994
ecl:amb
hcl:#18171d

eyr:1993 byr:1995
hgt:64cm iyr:2020 pid:15714997 hcl:#b6652a ecl:blu

iyr:2014
eyr:2030 pid:866047540 cid:59 hcl:#733820 byr:1951
hgt:64in ecl:amb

iyr:2015
byr:1962
hgt:69in ecl:brn
hcl:#623a2f eyr:2023
pid:671492881

iyr:2020 ecl:oth hgt:154cm byr:1950 pid:924256973
eyr:2028
hcl:#b6652a

byr:2021
hgt:116 cid:348 iyr:1930 pid:76948864 hcl:z
eyr:2036

hgt:156cm iyr:2014
byr:1960
pid:720786216
cid:99
ecl:gry
hcl:#a97842
eyr:2028`.split("\n\n");

// Part 1
let valid = 0;

input.forEach((passport) => {
    if (
        passport.includes("ecl:") &&
        passport.includes("pid:") &&
        passport.includes("eyr:") &&
        passport.includes("hcl:") &&
        passport.includes("byr:") &&
        passport.includes("iyr:") &&
        passport.includes("hgt:")
    )
        valid++;
});
console.log(valid);

// Part 2
valid = 0;
input.forEach((x) => {
    const passport = x.replace(/\s/gu, "\n");
    const regex = {
        byr: /(byr:)(19[2-9]\d)|(200[0-2])\b/gu,
        ecl: /(ecl:)(amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth)\b/gu,
        eyr: /(eyr:)20((2\d)|(30))\b/gu,
        hcl: /(hcl:)#[0-9a-f]{6}\b/gu,
        hgt: /(hgt:)((1(([5-8]\d)|(9[0-3]))cm)|(((59)|(6\d)|(7[0-6]))in))\b/gu,
        iyr: /(iyr:)20((1\d)|(20))\b/gu,
        pid: /(pid:)\d{9}\b/gu,
    };

    if (
        passport.match(regex.byr) &&
        passport.match(regex.iyr) &&
        passport.match(regex.eyr) &&
        passport.match(regex.hgt) &&
        passport.match(regex.hcl) &&
        passport.match(regex.ecl) &&
        passport.match(regex.pid)
    )
        valid++;
});
console.log(valid);
