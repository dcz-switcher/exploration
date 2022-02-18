import { PageTracker } from "./PageTracker"


export default {
    title: "UI/Page tracker",
    component: PageTracker
}

export const Default = (args) => {
    return (
        <div>
            <PageTracker steps={6}/>
        </div>
    )
}