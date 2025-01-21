// const upload_preset = process.env.REACT_APP_CLOUDINARY_PRESET;
// const cloud_name = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
// const api_url = process.env.REACT_APP_CLOUDINARY_URI;

export const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file",file)
    data.append("upload_preset","Billboard")
    data.append("cloud_name","dhsm2edbl")
try{
    const res = await fetch('https://api.cloudinary.com/v1_1/dhsm2edbl/image/upload',{
        method:"post",
        body:data,
    });
    
    const fileData = await res.json();
    return fileData.secure_url;
}
catch(error){
    console.log(error.message);
}
}