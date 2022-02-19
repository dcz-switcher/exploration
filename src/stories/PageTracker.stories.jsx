import { PageTracker } from "./PageTracker"


export default {
    title: "MODULES/Page tracker",
    component: PageTracker
}

const Template = (args) => <PageTracker {...args} />;

export const Default = Template.bind({})
Default.args = {
    count: 4,
    current: 1,
}


/*
export const Default = (args) => {
    return (
        <div>
            <PageTracker count={2}/>
        </div>
    )
}
*/