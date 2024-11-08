import styles from './Decode.module.scss'
import Footer from '../../components/Footer'
import { Upload, Flex, message, Input, Button } from 'antd'
import type { GetProp, UploadProps } from 'antd';
import { CopyOutlined, LoadingOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};
const beforeUpload = (file: FileType) => {
    console.log(file);

    const isJpgOrPng = file.type.startsWith('image/');
    if (!isJpgOrPng) {
        message.error('You can only upload image or svg');
    }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    //     message.error('Image must smaller than 2MB!');
    // }
    console.log(isJpgOrPng);

    return isJpgOrPng;
};
const Decode = () => {
    const [loading, setLoading] = useState(false);
    const [decodeValue, setdecodeValue] = useState("")
    const [imageUrl, setImageUrl] = useState<string>();
    const CopyDecodeContent = () => {
        navigator.clipboard.writeText("fasdfas")
        message.success(decodeValue)

    }
    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8, fontSize: "10px" }}>Upload QR Code image</div>
        </button>
    );
    return (
        <>
            <div style={{ height: "391px", overflow: "hidden" }}>
                <Flex gap="middle" justify='center' vertical align='center' style={{ margin: "50px 20px 20px 20px" }} >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className={styles.avatar_uploader}
                        showUploadList={false}
                        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        maxCount={1}
                        accept={'image/*'}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    <Input style={{ marginTop: "24px" }} value={decodeValue} addonAfter={<CopyOutlined onClick={CopyDecodeContent} />} placeholder="Display the QR Code decode result here"
                    />
                    <Button type="link" size='small'>
                        More function click here
                    </Button>
                </Flex>
            </div>
            <div className={styles.footer}>

                <Footer />
            </div>
        </>
    )
}
export default Decode;