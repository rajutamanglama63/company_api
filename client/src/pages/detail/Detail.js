import './detail.css'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const companies = useSelector(state => state.company)
    const [companyDetail, setCompanyDetail] = useState({});


    useEffect(() => {
        if(params.id) {
            companies.forEach((company) => {
                if(company._id === params.id) setCompanyDetail(company);
            })
        }
    })

    const goBackHandler = () => {
        navigate("/");
    }
    return (
        <div>
            <h1 className="heading">Company's Detail Info</h1>
            <div className="detail">
                <span className="info">id : {companyDetail._id}</span>
                <span className="info">name : {companyDetail.name}</span>
                <span className="info">created_at : {companyDetail.createdAt}</span>
                <span className="info">updated_at : {companyDetail.updatedAt}</span>
            </div>
            <button className="back" onClick={goBackHandler}>Go back</button>
        </div>
    )
}

export default Detail
