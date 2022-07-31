
"use strict";

try {

    console.clear();

    console.log(
        "\n\t\u00a0===>\u00a0"
        +
        decodeURIComponent(
            require("url")
                .parse(
                    "http://xyzXYZxyz:0000/default.htm" +
                    "?wrds=f%C3%A4rgglad%20m%C3%A5ngata&year=2001&month=December",
                    true
                ).query.wrds
        )
        +
        "\u00a0~~\u00a0"
        +
        require("url")
            .parse(
                "http://xyzXYZxyz:0000/default.htm" +
                "?wrds=f%C3%A4rgglad%20m%C3%A5ngata&year=2001&month=December",
                true
            ).query.month
        +
        "\u00a0of\u00a0"
        +
        require("url")
            .parse(
                "http://xyzXYZxyz:0000/default.htm" +
                "?wrds=f%C3%A4rgglad%20m%C3%A5ngata&year=2001&month=December",
                true
            ).query.year
    );

} catch (errNo) { if (errNo) { console.log(errNo); } else { }; } finally { };