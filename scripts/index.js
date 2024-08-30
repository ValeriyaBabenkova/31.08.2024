


function party(qty) 
{
    let count = 1

    let circles = setInterval(function () 
    {
        let result = `<div style="
                position: absolute;
                left:${Math.floor(Math.random() * (800-1) + 1)}px;
                top:${Math.floor(Math.random() * (800-1) + 1)}px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: rgb(` + 
                 Math.floor(Math.random() *256)+ `,` +
                 Math.floor(Math.random() *256)+ `,` +
                 Math.floor(Math.random() *256)+ `);`+
                `"></div>`
                document.write(result);
        if (count > qty) 
        {
            clearInterval(circles)
        };
        count ++               
    }, 300);
}
 party (7)
