import './home.css'

import {useState} from 'react'
import {useSelector} from 'react-redux'
import CompanyList from '../../components/categoryList/companyList'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const allCompanies = useSelector(state => state.company);
    return (
        <div>
            <CompanyList allCompanies={allCompanies} currentId={currentId} setCurrentId={setCurrentId} />
        </div>
    )
}

export default Home
