import { Header } from "@src/widgets/header";
import { MenuPage } from '@src/pages/menu'
import { useState } from "react";
import * as styles from './app.module.css';
import { Footer } from "@src/widgets/footer/index.js";

export const App = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.container}>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 1 && <MenuPage />}
            <Footer />
        </div>
    )
}
