import React from 'react';
/*
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.scss';
*/
class Magazine extends React.Component {
    id = null;
    /*
    constructor(props) {
        super(props);
    }*/

    render () {
        return (
            <div>
                <article class="article">
                    <header class="header">
                        <div class="category">Life</div>
                        <h1 class="headline">
                            The Lorem and Ipsum of Stylin&rsquo; Pancakes
                        </h1>
                        <div class="meta">
                            <span class="meta-border"></span>
                            <span class="author">by <span class="author-avatar">
                                <img alt="" src="http://gravatar.com/avatar/6fafd1e5977a3d9fdccb7207bb1175ba"></img> </span><span class="author-name">Jimmy Wafflehoff</span></span>
                            <span class="pub-date">Posted Sept. 22, 2015</span>
                        </div>
                    </header>

                    <p>A pancake is a flat cake, often thin, and round, prepared from a starch-based batter that may also contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often with oil or butter. In Britain, pancakes are often unleavened,
    and resemble a crêpe. In North America, a raising agent is used (typically baking powder). The North American pancake is similar to a Scotch pancake or drop scone. Commercially prepared pancake mixes are produced in some countries.</p>

                    <p>They may be served at any time with a variety of toppings or fillings including jam, fruit, syrup, chocolate chips, or meat. In America, they are typically considered to be a breakfast food. In Britain and the Commonwealth, they are associated with
    Shrove Tuesday, commonly known as Pancake Day, when perishable ingredients had to be used up before the fasting period of Lent began.</p>


                    <figure>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8533/pancakes.jpg" alt="American style pancakes"></img>
                        <figcaption><strong>Figure 1.</strong> American style pancakes.</figcaption>
                    </figure>
                    <h2>History</h2>
                    <p>
                        The Ancient Greeks made pancakes called τηγανίτης (tēganitēs), ταγηνίτης (tagēnitēs)<sup>[2]</sup> or ταγηνίας (tagēnias),<sup>[3]</sup> all words deriving from τάγηνον (tagēnon), "frying pan".<sup>[4]</sup> The earliest attested references on tagenias are in the works of the 5th century BC poets Cratinus<sup>[5]</sup> and Magnes.<sup>[6]</sup> Tagenites were made with wheat flour, olive oil, honey, and curdled milk, and were served for breakfast.
  </p>

                    <h2>Common Ingridients</h2>
                    <p>A <code>ul</code> tag is a good example of why you should set good default <code>font-size</code> and <code>line-height</code> above the context of simply paragraph tags. Let any sort of article content get sizing from its parents.</p>
                    <ul>
                        <li>Eggs</li>
                        <li>Flour or other starchy base.</li>
                        <li>Pure deliciousness.</li>
                    </ul>
                </article>
            </div>
        );
    }
}

export default Magazine
