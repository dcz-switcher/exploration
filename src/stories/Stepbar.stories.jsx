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

export const Reverse = Template.bind({})
Reverse.args = {
    mcfPrefix: 'mcf-stepbar',
    activeIndex: 1,
    sections: ["Etape 1", "Etape 2", "Etape 3", "Etape 4"],
    modify:{reverse: true}
}
