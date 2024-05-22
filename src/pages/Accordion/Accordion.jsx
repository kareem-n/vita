import { useState } from 'react'
import { ContentHead } from '../../components/Head/Head'
import './Accordion.css'

const Accordion = () => {
  const [accordion, setAccordion] = useState(0)

  const content = [
    {
      title: 'Title 1',
      data:'10/1/2024',
      description: 'Description 1'
    },
    {
      title: 'Title 2',
      data:'2/5/2023',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'
    },
    {
      title: 'Title 3',
      data:'8/7/2024',
      description: 'Description 3'
    },
    {
      title: 'Title 4',
      data:'1/1/2024',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived"
    },
    {
      title: 'Title 5',
      data:'2/12/2023',
      description: 'Description 5'
    },
    {
      title: 'Title 6',
      data:'8/12/2024',
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
      title: 'Title 7',
      data:'1/6/2024',
      description: 'Description 7'
    },
  ]

  const accodionToggle = (index) =>{
    if(accordion === index){
      setAccordion(null)
    }else{
      setAccordion(index)
    }
  }
  return (
    <>
      <div className="accordion">
        <ContentHead/>
        <div className="content">
          <div className="heading">
            <h2>Description</h2>
            <h2>Data</h2>
          </div>
          <div className="accordion-wrapper">
            {
              content.map((item,index)=>(
                <div className="first-info" key={index}>
                  <div className='d-flex justify-content-between align-items-center' onClick={() => accodionToggle(index)}>
                    <h2>{item.title}</h2>
                    <h2>{item.data}</h2>
                    <span className="material-symbols-outlined">{accordion === index ? 'expand_more' : 'expand_less'}</span>
                  </div>
                  <p className={`description ${accordion === index ? 'active' : ''}`}>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion