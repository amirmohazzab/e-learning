import React from 'react'

const SingleCourse = () => {
  return (
    <section class="term-content">
    <header><h1>                      </h1></header>
    <div class="row">

        <div class="col-md-8 col-sm-12 col-xs-12 pull-right">
            <section class="term-description">
                <img src="images/pic/big-thumb.jpg"/>

                <h2>         </h2>
                <p>
                    
                </p>
            </section>
        </div>

        <aside class="col-md-4 col-sm-12 col-xs-12 pull-left">

            <article class="teacher-info">
                <img src="images/pic/avatar.jpg"/>
                <h2> teacher: John Black</h2>
            </article>

            <article class="term-info">
                <h2> Course info </h2>
                <ul>
                    <li> level: Advanced </li>
                    <li> price: 50 euro </li>
                </ul>
            </article>
        </aside>
    </div>
</section>
  )
}

export default SingleCourse
