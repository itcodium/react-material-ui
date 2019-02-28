import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Markdown from './Markdown';
import blog1 from './quienes_somos.txt';

import Typography from '@material-ui/core/Typography';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData'

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
    mainFeaturedPostContent: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        padding: `${ theme.spacing.unit * 6 }px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${ theme.spacing.unit * 3 }px 0`,
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    gridList: {
        width: 'auto',
        height: 'auto',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
});



const posts = [blog1]



class QuienesSomos extends React.Component {

    render () {
        const { classes } = this.props;
        const mark = posts.map(post => (
            <Markdown className={ classes.markdown } key={ post.substring(0, 40) }>
                { post }
            </Markdown>
        ))
        return (
            <div>
                <GridList cellHeight={ 200 } spacing={ 1 } className={ classes.gridList }>
                    { tileData.map(tile => (
                        <GridListTile key={ tile.img } cols={ tile.featured ? 2 : 1 } rows={ tile.featured ? 2 : 1 }>
                            <img src={ tile.img } alt={ tile.title } />

                            <GridListTileBar
                                title={ tile.title }
                                titlePosition="top"
                                actionIcon={
                                    <IconButton className={ classes.icon }>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                                className={ classes.titleBar }
                            />
                        </GridListTile>
                    )) }
                </GridList>
                { mark }
            </div>
        );
    }
}

export default (withStyles(styles)(QuienesSomos))


/*




    <Markdown
                    children={ md }
                />
            <div>
                <div className={ classes.mainFeaturedPostContent }>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        QUIENES SOMOS
                  </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                        Multiple lines of text that form the lede, informing new readers quickly and
                        efficiently about what&apos;s most interesting in this post&apos;s contents…
                  </Typography>
                </div>
                Somos un grupo de profesionales, ingenieros – arquitectos – licenciados que hemos adquirido
                nuestro conocimiento en el rubro energético representando los servicios de provision de
                mercaderías de acuerdo a las diferentes necesidades de cada empresa.

                hemos manejado la provision de materiales de proyectos en sus diferentes etapas, revisamos las
                etapas del Project planer y luego de un análisis nos anticipamos a las necesidades de cada sector,
                este análisis nos obliga a estar siempre un paso adelante garantizando los mínimos desvíos
                posibles y la concreción de resultados exitosos.

                Contamos con una extensa red de proveedores y colaboradores que ayudan a optimizar los
                recursos de nuestros clientes.

                gestionamos procesos locales e internacionales, respondemos a las necesidades de mejora en las
                negociaciones, búsqueda, prospección y homologación de nuevos proveedores, mejora en los
                costos de adquisición, gestión de créditos, manejo integral de la documentación técnico-comercial
                y atención especializada en proyectos gubernamentales.

                ofrecemos a nuestros clientes la sub contratación logistica de almacenaje en bodegas con sus
                respectivas condiciones de resguardo – cuartos de clima controlado – manejo de materiales
                peligrosos , etc y manejo de stock , de tal forma que estará configurada a su medida para
                satisfacer las necesidades específicas en su organización como el abastecimiento estratégico o
                las operaciones aprovisionamiento cotidianas, generando un mayor rendimiento por su
                inversión.
            </div>
*/