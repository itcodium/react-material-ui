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
    footers: [
        {
            title: 'Company',
            description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
            title: 'Features',
            description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
        },
        {
            title: 'Resources',
            description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
            title: 'Legal',
            description: ['Privacy policy', 'Terms of use'],
        },
    ]
}

export default AplicationText;
