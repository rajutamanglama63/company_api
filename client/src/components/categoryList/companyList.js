import './companyList.css'
import {Delete, Edit, Info} from '@material-ui/icons'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCompany, postCompany, deleteCompany, updateCompany} from '../../redux/actions/companyAction'
import Pagination from '../pagination/Pagination'

const CompanyList = ({allCompanies, currentId, setCurrentId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const companies = useSelector((state) => currentId ? state.company.find((singleCompany) => singleCompany._id === currentId) : null);

    const [currentPage, setCurrentPage] = useState(1);
    const [companyPerPage] = useState(3);
    const [companyData, setCompanyData] = useState({
        name : ""
    });


    useEffect(() => {
        dispatch(getAllCompany());
    }, [dispatch]);

    // Get current companies
    const indexOfLastCompany = currentPage * companyPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companyPerPage;
    const currentCompanies = allCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

    useEffect(() => {
        if(companies) setCompanyData(companies);
    }, [companies]);


    const editBtnHandler = (id) => {
        setCurrentId(id);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(currentId === null) {
            dispatch(postCompany(companyData));
            setCompanyData({
                name : ""
            });
        } else {
            dispatch(updateCompany(currentId, companyData));
            setCompanyData({
                name : ""
            });
        }
    }

    const deleteHandler = (id) => {
        dispatch(deleteCompany(id))
    }

    const detailHandler = (id) => {
        navigate(`/${id}`);
    }


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <div>
            <h1 className="heading">Company List</h1>
            <form autoComplete="off" noValidate className="post_company" onSubmit={submitHandler}>
                <label>{currentId ? "Edit Company:" : "Create Company:"}</label>
                <input 
                 placeholder="Enter company name" 
                 type="text" 
                 className="input_field" 
                 value={companyData.name}
                 onChange={(e) => setCompanyData({...companyData, name : e.target.value})}
                />
                <button className="post_btn" type="submit">{currentId ? "Edit" : "Post"}</button>
            </form>
            <ul className="company_list">
                {
                    currentCompanies.map((company) => (
                        <li className="company_item" key={company._id}>
                            <span className="company_name">{company.name}</span>
                            <div className="options">
                                <button style={{background : "yellow"}} onClick={() => detailHandler(company._id)}><Info /></button>
                                <button style={{background : "red"}} onClick={() => deleteHandler(company._id)}><Delete /></button>
                                <button style={{background : "pink"}} onClick={() => editBtnHandler(company._id)}><Edit /></button>
                            </div>
                        </li>
                    ))
                }
                
            </ul>
            <Pagination companyPerPage={companyPerPage} paginate={paginate} totalCompanies={allCompanies.length} />
        </div>
        </>
    )
}

export default CompanyList
