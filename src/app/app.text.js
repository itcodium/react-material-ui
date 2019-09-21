const AplicationText =
{
    title: "Test",
    menu: [
        {
            text: "Home",
            url: "/",
            items: []
        },
        {
            text: "Nosotros",
            url: "/Nosotros",
            items: []
        },
        {
            text: "Proveedores",
            url: "/Proveedores",
            items: []
        }
        ,
        {
            text: "Tienda",
            url: "",
            items: [{
                text: "Productos",
                url: "/ProductList",
                items: []
            },
            {
                text: "Civil",
                url: "/products/Civil",
                items: []
            }]
        }
        ,
        {
            text: "Contacto",
            url: "/Contacto",
            items: []
        }
    ],
    footer: {
        links: [
            {
                title: 'Company',
                urls: [{ text: 'Team', href: "/#" }, { text: 'History', href: "/#" }, { text: 'Contact us', href: "/#" }, { text: 'Locations', href: "/#" }],
            },
            {
                title: 'Features',
                urls: [{ text: 'Cool stuff', href: "/#" }, { text: 'Random feature', href: "/#" }, { text: 'Team feature', href: "/#" }, { text: 'Developer stuff', href: "/#" }]
            }

        ]
    }
}

export default AplicationText;
