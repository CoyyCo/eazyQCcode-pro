import { Flex, theme } from "antd"
import styles from './Footer.module.scss'
// import { grey } from "@ant-design/colors";
import { ContactsOutlined, CrownOutlined, SettingOutlined } from '@ant-design/icons';
// imoprt {}
const Footer = () => {
    const { token } = theme.useToken();
    return (
        <div className='footer' style={{ fontSize: "10px" }}>
            <Flex justify="space-around" gap="middle" align="center">
                <div className={styles.footer_item} style={{ color: token.colorPrimary }}>
                    <Flex vertical align='center' className={styles.footer_item_flex}>
                        <ContactsOutlined style={{ fontSize: "16px" }} />
                        {/* <span>Contact me</span> */}
                    </Flex>

                </div>
                <div className={styles.footer_item} style={{ color: "#ffec3d" }}>
                    <Flex vertical align='center' className={styles.footer_item_flex}>
                        <CrownOutlined style={{ fontSize: "20px" }} />
                        {/* <span>Premium</span> */}

                    </Flex>
                </div>
                <div className={styles.footer_item} style={{ color: token.colorPrimary }}>
                    <Flex vertical align='center' className={styles.footer_item_flex}>
                        <SettingOutlined style={{ fontSize: "16px" }} />
                        {/* <span>Setting</span> */}
                    </Flex>
                </div>


            </Flex>
        </div>
    )
}
export default Footer