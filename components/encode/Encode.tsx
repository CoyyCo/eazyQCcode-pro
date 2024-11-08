
import { Input, GetProps, Image, Button } from 'antd';
import styles from './Encode.module.scss'
import { DownloadOutlined } from '@ant-design/icons';
import Footer from '../Footer';
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;
const Encode = () => {
    return (
        <>
            <div className={styles.search_box}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Generate"
                    // size="small"
                    onSearch={onSearch}
                />
            </div>
            <div className={styles.img_box}>
                <Image
                    width={256}
                    height={256}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    alt='QR code'
                    placeholder={true}
                    preview={false}
                />
                <div className={styles.img_text}>
                    <Button type="dashed" icon={<DownloadOutlined />} style={{ marginBottom: "12px" }}>
                        Download
                    </Button>
                    <br></br>
                    <Button type="link" size='small' onClick={gohref}>
                        Customize QR Code here
                    </Button>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    )

}
const onSearch: SearchProps['onSearch'] = (value, _e, info) => {

}
const gohref = () => {
    const url = browser.runtime.getURL('/newpage.html')
    // browser.Tabs.
    browser.tabs.create({
        url: url
    })
    // console.log(url);


}

export default Encode;