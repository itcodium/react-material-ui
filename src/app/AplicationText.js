const AplicationText =
{
    title: "Test",
    menu: [
        {
            text: "Home",
            url: "/",
            items: [{
                text: "Sub Item 1",
                url: "/SubItem1"
            }, {
                text: "Sub Item 2",
                url: "/SubItem2"
            }]
        },
        {
            text: "Product List",
            url: "/ProductList",
            items: []
        },
        {
            text: "test",
            url: "/test",
            items: []
        }

    ],
    navBar: [
        {
            text: "Porque COADYS",
            url: "/",
        },
        {
            text: "Gestion",
            url: "/ProductList",
        },
        {
            text: "Proveedores",
            url: "/test",
        }
        ,
        {
            text: "Trabajo",
            url: "/test",
        }
        ,
        {
            text: "Servicios",
            url: "/test",
        }
        ,
        {
            text: "Contactenos",
            url: "/test",
        }
    ]
}

export default AplicationText;

