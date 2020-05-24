https://en.wikipedia.org/wiki/Protocol_Buffers

--decode_raw                Read an arbitrary protocol message from
                            standard input and write the raw tag/value
                            pairs in text format to standard output.  No
                            PROTO_FILES should be given when using this
                            flag.


cat all | protoc --decode_raw

get the key names from the site's javascript

see app.sample.js#846

protoc --proto_path=. --ruby_out=./ manga_plus.proto
