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
            text: "Gestion",
            url: "/Gestion",
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
                url: "/Trabajo",
                items: []
            },
            {
                text: "Carrito",
                url: "/Servicios",
                items: []
            }]
        }
        ,
        {
            text: "Contactenos",
            url: "/Contactenos",
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
