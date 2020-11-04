import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const TabsAtom = (props) => {
    return <Tabs value={props.id ? props.id : 0} aria-label="simple tabs example">
        {props.tabs.map((tab, index) => (
            < Tab
                key={tab.id}
                label={tab.title}
                onClick={() => props.onClick(tab.id, index)}
            />
        ))
        }
    </Tabs>
};
export default TabsAtom;