import { Flex } from "antd"
import styles from './Footer.module.scss'
import { grey } from "@ant-design/colors";
import { ContactsOutlined, CrownOutlined, SettingOutlined } from '@ant-design/icons';
// imoprt {}
const Footer = () => {
    return (
        <div className='footer' style={{fontSize:"10px",backgroundColor:grey[1]}}>
            <Flex justify="space-around" gap="middle">
                <div className={styles.footer_item} style={{color:"#fff"}}>
                    <Flex vertical align='center' className={styles.footer_item_flex}>
                        <ContactsOutlined style={{ fontSize: "16px"}}/>
                        {/* <span>Contact me</span> */}
                    </Flex>

                </div>
                <div className={styles.footer_item} style={{color:"#ffec3d"}}>
                    <Flex vertical align='center' className={styles.footer_item_flex}>
                        <CrownOutlined style={{ fontSize: "16px"}}/>
                        {/* <span>Premium</span> */}

                    </Flex>
                </div>
                <div className={styles.footer_item} style={{color:"#fff"}}>
                    <Flex vertical align='center' className={styles.footer_item_flex}>
                        <SettingOutlined style={{ fontSize: "16px"}}/>
                        {/* <span>Setting</span> */}
                    </Flex>
                </div>


            </Flex>
        </div>
    )
}
export default Footer