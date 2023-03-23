// import { useRouter } from 'next/router'
// import Header from '../../../components/header'

// export default function CommentPage() {
//   const router = useRouter()
//   const id = router.query.id as string
//   const comment = router.query.comment as string

//   return (
//     <>
//       {/* <Header /> */}

//       <h1>Post: {id}</h1>
//       <h1>Comment: {comment}</h1>
//     </>
//   )
// }
import { get } from 'http'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from '../../../components/header'
import Renderer from '../../../components/Renderer'
import { getDataV2OrV3 } from "../../../utils/oa-details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint,faCheck,faCheckCircle,faWonSign,faTimesCircle } from "@fortawesome/free-solid-svg-icons";


// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function CommentPage() {
  const router = useRouter()
  const uuid = router.query.uuid as string
  const key = router.query.key as string
  const [postData, setPostData] = useState(null)
  const [verifyStatus, setVerifyStatus] = useState([])
  const [verifyData, setverifyData] = useState(null)


  useEffect(() => {
    async function fetchPostData() {
        // const response = await fetch(`http://192.168.31.61:9000/blockchain/getWrape?uuid=92fbfe68a30dca2db88f2975b4d0335898ae2c0d78582baca2a3b9df1de0c058&key=bdc1bed5925bc907887fe48b4e44a1ff9968525a07282a15ef43b66c6791f734`)
     console.log("Uuid",uuid,key);
     
        const response = await fetch(`http://192.168.31.61:9000/blockchain/getWrape?uuid=${uuid}&key=${key}`)
        // const response = await fetch(`http://192.168.31.61:9000/blockchain/getWrape?uuid=${uuid}&key=${key}`)
        const jsonData = await response?.json();
        setPostData(jsonData);
     
     
        const res = await fetch(`http://192.168.31.61:9000/blockchain/verify?uuid=${uuid}&key=${key}`);
        // const res2 = await fetch(`http://192.168.31.61:9000/blockchain/getWrape?uuid=${uuid}&key=${key}`);


      const jsonData1 = await res?.json();
      setVerifyStatus(jsonData1?.payload);

    }

    fetchPostData()


  }, [uuid,key])


  console.log("document data",postData);
  console.log("Here is the verify",verifyStatus);
  // setverifyData(verifyStatus?.payload);
console.log("sna",verifyData);

  return (
    <>
      {/* <Header /> */}


        <div>
          <h1>Target Hash: {uuid}</h1>
          <h1>Key: {key}</h1>
          <h2>ឯកសាត្រូវបានចេញដោយ៖ {verifyStatus[3]?.data[0]}</h2>
          {verifyStatus[0]?.status=="VALID"?  <div> <FontAwesomeIcon icon={faCheckCircle} style={{color:"green"}}/> ឯកសារពិតជាត្រឹមត្រូវ​ ពិតប្រាកដមែន</div>  :"ឯកសារមិនត្រឹមត្រូវ"}
          ,<br />
          { verifyStatus[1]?.status=="VALID"?<div> <FontAwesomeIcon icon={faCheckCircle} style={{color:"green"}}/> ឯកសារនៅមាន​សុពលភាព​(Document has not revoke)</div> :<div> <FontAwesomeIcon icon={faTimesCircle} style={{color:"red"}} /> {verifyStatus[1]?.reason?.message}</div> }
          <br />
          { verifyStatus[2]?.status=="VALID"? <div> <FontAwesomeIcon icon={faCheckCircle} style={{color:"green"}}/>  ឯកសាត្រូវបានចេញដោយអត្តសញ្ញាណច្បាស់លាស់</div>:verifyStatus[2]?.reason?.message}
 {/* <h2>ឯកសាត្រូវបានចេញដោយ៖ {verifyData[0]?.data[0]}</h2>
    {
      verifyData[0]?.status=="VALID"?"ឯកសារពិតជាត្រឹមត្រូវ":"ឯកសារមិនត្រឹមត្រូវ"
      
    }
    <br></br>
    { verifyData[1]?.status=="VALID"? "ឯកសារនៅមាន​សុពលភាព​(Document has not revoke)":verifyData[1]?.reason?.message}
    <br></br>
    { verifyData[2]?.status=="VALID"? "ឯកសាត្រូវបានចេញដោយអត្តសញ្ញាណច្បាស់លាស់":verifyData[1]?.reason?.message}
    { verifyData[2]?.status=="VALID"? "ឯកសាត្រូវបានចេញដោយអត្តសញ្ញាណច្បាស់លាស់":verifyData[1]?.reason?.message}
 */}

          <Renderer document={getDataV2OrV3(postData?.payload)} rawDocument={postData?.payload} />
        </div>
  
    </>
  )
}