import { Stepbar } from "./Stepbar"

export default {
    title: "MODULES/Stepbar",
    component: Stepbar
}

const Template = (args) => <Stepbar {...args} />;

export const Default = Template.bind({})
Default.args = {
    mcfPrefix: 'mcf-stepbar',
    activeIndex: 1,
    sections: ["Etape 1", "Etape 2", "Etape 3"],
    modify:{}
}
