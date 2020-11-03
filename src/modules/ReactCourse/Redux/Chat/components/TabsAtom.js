import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const TabsAtom = (props) => {
    return <Tabs value={props.value} aria-label="simple tabs example">
        {props.tabs.map((tab, index) => (
            < Tab
                key={index}
                label={tab.title}
                onClick={() => props.onClick(index, tab.id)}
            />
        ))
        }
    </Tabs>
};
export default TabsAtom;