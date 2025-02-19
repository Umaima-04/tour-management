import React,{useState} from 'react'
import CommonSection from './../shared/CommonSection';
import { Container ,Row,Col} from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from './../shared/TourCard';
import Newsletter from './../shared/Newsletter';



const SearchResultList = () => {
 
  const location=useLocation();

  const [data]=useState(location.state || []);
  
  
  return (<>
    <CommonSection title={'Tour Search Result'}/>
    <section>
        <Container>
            <Row>
              {
                data.length===0?(<Col className='text-center'>
                <h4 > No tour found</h4></Col>
                ):(
                data?.map(tour=>(
                <Col lg='4' className="mb-4" key={tour._id}>
                <TourCard tour={tour}/> </Col>
                )))
              }
            </Row>
        </Container>
    </section>
    <Newsletter/>
    </>
  )
  
};

export default SearchResultList
