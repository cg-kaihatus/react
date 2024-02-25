import { Container, Box, Grid, Button, Modal} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

type imageDataType = {
    src:string;
    imageFile:File;
  }

const AImageUploadModal = ({
    uploadOpen, handleUploadClose, imageData, setImageData,
}:{
    uploadOpen: boolean; handleUploadClose: () => void; imageData: imageDataType | null; setImageData: (imageData: imageDataType | null) => void;
}) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '1px solid #CCC',
        boxShadow: 24,
        p:4,
      };

    const handlePasteImage  = async(event: React.ClipboardEvent<HTMLDivElement>) => {
        const isImage = event.clipboardData.items[0].type.indexOf("image") != -1
        if(isImage){
            const imageFile = event.clipboardData.items[0].getAsFile()
            if(imageFile!==null){
                const URLObj = window.URL || window.webkitURL
                const imgSrc = URLObj.createObjectURL(imageFile)
                setImageData({
                    src:imgSrc,
                    imageFile
                });
            }
        }
    };
    
    return (
        <Modal
          open={uploadOpen}
          onClose={handleUploadClose}
        >
          <Box sx={style} onPaste={handlePasteImage}>
            <Box sx={{border: '3px dashed #CCC', height: '400px', borderRadius: '20px', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <div style={{color: '#AAA'}}>
                    <div style={{textAlign: 'center'}}>
                        貼り付け、またはドラッグ＆ドロップでもアップロードできます。
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <UploadIcon sx={{fontSize: '200px'}}/>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <Button variant='outlined'>画像ファイルを選択</Button>
                    </div>
                </div>
            </Box>
          </Box>
        </Modal>
    );
}

export default AImageUploadModal;