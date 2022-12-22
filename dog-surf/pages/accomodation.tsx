import styles from '../styles/Accomodation.module.css'

const accomodation = () => {
    return (

        <div className={styles.listing_box_root}>
            <div className={styles.listing_box}>
            <h3 className={styles.Authformtitle}>Listing of all properties</h3>

                    <div className={styles.listing_text_headlines}>
                        <label className={styles.label_l_id}>ID</label>
                        <label className={styles.label_l}>Property Location</label>
                        <label className={styles.label_l}>Property address</label>
                        <button className={styles.button_invisible }>BOOK</button>
                    </div>
                
                {/* { properties.map((property) => (
                    <div className='db_input' key={property.id}>
                        <label className="label_l_id">{property.id}</label>
                        <label className="label_d">{property.propertyLocation}</label>
                        <label className="label_d">{property.propertyAddress}</label>
                        <button className="button_d btn btn-primary"
                            
                        >BOOK
                        </button>
                    </div>
                ))} */}
                            
                    <div className={styles.db_input} key="1">
                        <label className={styles.label_l_id}>1</label>
                        <label className={styles.label_d}>dasdasdasdads</label>
                        <label className={styles.label_d}>dasdasdasdassda</label>
                        <button className={styles.button3}
                            
                        >BOOK
                        </button>
                    </div>
                    <div className={styles.db_input} key="1">
                        <label className={styles.label_l_id}>1</label>
                        <label className={styles.label_d}>dasdasdasdads</label>
                        <label className={styles.label_d}>dasdasdasdassda</label>
                        <button className={styles.button3}
                            
                        >BOOK
                        </button>
                    </div>
                    <div className={styles.db_input} key="1">
                        <label className={styles.label_l_id}>1</label>
                        <label className={styles.label_d}>dasdasdasdads</label>
                        <label className={styles.label_d}>dasdasdasdassda</label>
                        <button className={styles.button3}
                            
                        >BOOK
                        </button>
                    </div>
         

            </div>
    </div>











    )
}
export default accomodation
