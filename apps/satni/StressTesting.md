# Stress testing satni.org


To test satni.org for high load and to see if it stays up we have used apache http server benchmarking tool [ab](http://httpd.apache.org/docs/2.2/programs/ab.html).
Commands and their results from 17/11/2016 and 18/11/2016:


`ab -c 10 -n 1500 http://gtweb.uit.no:8080/exist/restxq/satni/search?query=dep&dict=all`

where -c <number> is number of concurrent workers, and -n <unmber> is number of requests sent.


Example result:

```
This is ApacheBench, Version 2.3 <$Revision: 1706008 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/


Benchmarking gtweb.uit.no (be patient)
Completed 150 requests
Completed 300 requests
Completed 450 requests
Completed 600 requests
Completed 750 requests
Completed 900 requests
Completed 1050 requests
Completed 1200 requests
Completed 1350 requests
Completed 1500 requests
Finished 1500 requests




Server Software:        Jetty(8.1.9.v20130131)
Server Hostname:        gtweb.uit.no
Server Port:            8080


Document Path:          /exist/restxq/satni/search?query=dep
Document Length:        3196 bytes


Concurrency Level:      10
Time taken for tests:   131.983 seconds
Complete requests:      1500
Failed requests:        0
Total transferred:      5197439 bytes
HTML transferred:       4794000 bytes
Requests per second:    11.37 [#/sec] (mean)
Time per request:       879.890 [ms] (mean)
Time per request:       87.989 [ms] (mean, across all concurrent requests)
Transfer rate:          38.46 [Kbytes/sec] received


Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       7
Processing:   457  878 144.1    863    1546
Waiting:      456  878 144.1    863    1546
Total:        457  879 144.1    863    1546


Percentage of the requests served within a certain time (ms)
  50%    863
  66%    924
  75%    964
  80%    988
  90%   1063
  95%   1137
  98%   1227
  99%   1288
 100%   1546 (longest request)
```


The server has been experiencing out of memory crashes. Now there is Oracle Java installed on gtweb which is used now. This seems to be more stable, but this needs more time and more testing to be sure of.


To see how the server handles the stress testing, you can also use the
[monitoring webapp that comes with eXist](http://gtweb.uit.no:8080/exist/apps/monex/index.html).
**NB!** User name and password required, as Sjur or Tomi!
