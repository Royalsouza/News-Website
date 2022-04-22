import React  from 'react'

const NewsItem = (props) => {

  
    let {title,imageUrl,newsUrl,author,date} = props;
    return (
      <div>
         <div className="card my-3" >
  <img src={!imageUrl?"https://cdn.pixabay.com/photo/2020/05/29/13/55/abandon-5235255_960_720.jpg":imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className='card-text'><small className="text-muted">By{!author?"Unkonwn":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
  </div>
</div>
      </div>
    )
  }

export default NewsItem