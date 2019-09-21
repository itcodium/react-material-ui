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
    },
    copyright: {
        website: "Your Website",
        link: "https://google.com/",
        createdby: {
            text: "Creado por ",
            name: "Someone",
            link: "https://someone.com/"
        }
    },
    contact: {
        title: "Encontranos en",
        cel: "(034) 11-339-4422",
        email: "contact@website.com",
        direction: "Ruta 8 y Subida de Diez, Bariloche",
    },
    social: [{ name: "Facebook", url: "https://www.facebook.com/test/" },
    { name: "instagram", url: "https://www.instagram.com/test/" },
    { name: "twitter", url: "https://twitter.com/test" },
    { name: "youtube", url: "https://www.youtube.com/user/test" }]

}





export default AplicationText;
