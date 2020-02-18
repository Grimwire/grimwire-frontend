import React from 'react'
import { Form } from 'react-bootstrap'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

class Pages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredCategory: "-1",
            searchTerm: ""
        }
    }

    linkCard = (item) => {

        return <div style={{ display: "block", width: '280px', margin: '10px 25px' }}>
            <a target="_blank" className="amazon-link"
                href={`https://www.amazon.com/gp/product/${item.amazonId}/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=${item.amazonId}&linkCode=as2&tag=grimwire-20&linkId=${item.linkId}`}>
                <h3>{item.title}</h3>
                <img border="0" src={`//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=${item.amazonId}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=grimwire-20`} />
                <p>{item.description}</p>
            </a>
            <img src={`//ir-na.amazon-adsystem.com/e/ir?t=grimwire-20&l=am2&o=1&a=${item.amazonId}`}
                width="1" height="1" border="0" alt="" />
        </div>
    }

    handleSelectionChange = (e) => {
        this.setState({ filteredCategory: e.target.value })
    }

    render() {
        let lastCategory = "";

        return <SwitchTransition>
            <CSSTransition key={`shop`} in={true} timeout={350} classNames="whole-page" unmountOnExit appear enter exit>
                <div key="shop" style={{ minHeight: "100vh" }}>


                    <div className="text-container">
                        <h3>Choose your wares... if you dare.</h3>
                        <br /><h1>The Crossroads</h1><br />
                        <p>We offer links to places around the web that have the materials & supplies you need.</p>
                        <p>We try to find the best quality products, with great reviews, while remaining affordable.</p>
                        <p>We do make commission from any sales, so if you are already buying supplies, you can look here to help support us at the same time.</p>
                        <br />
                        <div style={{ margin: '10px', maxWidth: '400px', margin: "auto" }}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Category Filter</Form.Label>
                                    <Form.Control as="select" onChange={this.handleSelectionChange}>
                                        <option value="-1">All</option>
                                        {
                                            this.categoryList().map(option =>
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>)
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>


                    <div>{

                        this.fauxDb().map(item => {
                            const categoryPrint = item.category !== lastCategory ?
                                <h2 className="shop-category">{item.category}</h2> : null

                            lastCategory = item.category

                            const show = categoryPrint
                            if (show) {
                                return <>
                                    {categoryPrint}
                                    <div style={{display:'flex', flexWrap: 'wrap'}}>
                                    {

                                        this.fauxDb().map(item2 => {
                                            const show = item2.category === item.category
                                            if (show) {
                                                return this.linkCard(item2)
                                            } else { return null }
                                        })
                                    }
                                    </div>
                                </>
                            } else { return null }
                        })

                    }</div>

                </div>
            </CSSTransition>
        </SwitchTransition>


    }

    categoryList = () => {
        let categoryList = []
        this.fauxDb().map(item => {
            if (categoryList.indexOf(item.category) < 0) {
                categoryList.push(item.category)
            }
        })
        return categoryList
    }

    fauxDb = () => {
        return [
            {
                amazonId: 'B07KV8B6Y9',
                linkId: 'cf1ddd73b755db2e9213229c328ebbb4',
                category: "Herbs",
                title: "Spell Herb Sampler",
                description: "A nice selection of herbs for the witch who needs to customize their use."
            },
            {
                amazonId: 'B01D4064A2',
                linkId: '282e779eba8c150297e0f573b844b875',
                category: "Herbs",
                title: "Deluxe Herb Sampler",
                description: "For the experienced witch to get a little sampler."
            },
            {
                amazonId: '1634241657',
                linkId: '0910c38a01967cfd825b77e0a0c922a6',
                category: "Books",
                title: "Liber 420",
                description: "A quality look at the history of cannabis in the occult."
            },
            {
                amazonId: 'B00OAK9AN4',
                linkId: '57f9c9defa44e708121e2d87bfddd596',
                category: "Herbs",
                title: "Beginner Herb Sampler",
                description: "Just a few easy herbs for the absolute beginner."
            },
            {
                amazonId: 'B07NXZMH6Y',
                linkId: '6ea994e7133b76d2fb5fa14fbf54d591',
                category: "Crystals",
                title: "Beginner Crystal Set",
                description: "A good decent crystals to get all your bases (and chakras... and more...) covered."
            },
            {
                amazonId: 'B07WJHMWRQ',
                linkId: 'f403e18bdde7468ab8fd2583cd38457c',
                category: "Crystals",
                title: "Healing Chakra Crystal Set",
                description: "Basic crystal set for balance & grounding."
            },
            {
                amazonId: 'B07BNJ76LM',
                linkId: 'ec5011fcffdbee05441b2e9a2941cf1d',
                category: "Crystals",
                title: "Crystal Tree",
                description: "A neat store that lets you choose the crystal you want on your tree."
            },
            {
                amazonId: 'B07K8G35KQ',
                linkId: 'adf498fe3ede9eab8f382a720306e020',
                category: "Crystals",
                title: "Set of Healing Wands",
                description: "Basic set of quartz & amethyst for the very beginner."
            },
            {
                amazonId: 'B01LXZUC1C',
                linkId: '57f23ea27be4253c8f01e511cc59dd55',
                category: "Crystals",
                title: "Box of Crafting Crystals",
                description: "A box of different small crystals for making your own crafts."
            },
            {
                amazonId: 'B06ZYP2STH',
                linkId: '2b6874cbc5f479092a0b437f1c4b1755',
                category: "Crystals",
                title: "Selenite Wand",
                description: "A big selenite wand. 'Nuff said."
            },
            {
                amazonId: 'B077HYJYSF',
                linkId: '636af03688cd2c8401ba15e748dfd493',
                category: "Magickal Tools",
                title: "Black Obsidian Crystal Ball",
                description: "Something along the lines of something else and the store goes here up in the blank spot"
            },
            {
                amazonId: 'B06XHGMZVR',
                linkId: '8d952b65e3f88a119ab5d4084cb125db',
                category: "Crystals",
                title: "Crystal Spell Sampler",
                description: "A bunch of pendants to use how you'd like."
            },
            {
                amazonId: 'B01HVOX9PA',
                linkId: 'a236f5e5436ef18cb04147d26cb36332',
                category: "Magickal Tools",
                title: "Amethyst/Oak Magick Wand",
                description: ""
            },
            {
                amazonId: 'B01DMX4XCM',
                linkId: 'ab6b797a839eb865d921a4511cc6bba6',
                category: "Magickal Tools",
                title: "Silver/Quartz Chakra Wand",
                description: ""
            },
            {
                amazonId: 'B07H4N7KMS',
                linkId: '136b0866eb2f4765bb84eec7c960428c',
                category: "Magickal Tools",
                title: "Hematite/Angel Chakra Wand",
                description: ""
            },
            {
                amazonId: 'B00WR1T4PW',
                linkId: 'db4ea7b1bd7e1db196ac734c68708593',
                category: "Journals",
                title: "Leather Journal w/ Crystals",
                description: ""
            },
            {
                amazonId: '1441310584',
                linkId: '56b1200bb67aee896b598ae4083a6398',
                category: "Journals",
                title: "Black Hardcover Journal w/ Gold Trim",
                description: ""
            },
            {
                amazonId: '0875421180',
                linkId: 'b861e598fdcce036f13338398601fa45',
                category: "Books",
                title: "Wicca: Solitary Practictioner",
                description: "A decent book with good material for operating without a coven."
            },
            {
                amazonId: '0875420508',
                linkId: '3581dda1ba9737fdfe5111792d017178',
                category: "Books",
                title: "Complete Witchcraft",
                description: ""
            },
            {
                amazonId: '194677409X',
                linkId: 'aa5d70e5f11fa5e04a33f3a0d163a2aa',
                category: "Books",
                title: "The Three Books of Solomon",
                description: "The infamous book of demons."
            },
            {
                amazonId: '0877282684',
                linkId: '642501008abc2bc38a34f702e348f384',
                category: "Books",
                title: "Book of Thoth",
                description: "The quintesstial book for understanding Kabbalah through tarot."
            },
            {
                amazonId: '1438235720',
                linkId: '6ad2933f103a2b7b4ace6be1b1873b22',
                category: "Books",
                title: "The Kybalion & The Emerald Tablets",
                description: "The origins of Hermeticism."
            },
            {
                amazonId: '1912715473',
                linkId: 'd81841d58bbde1134ccd253295f0f5e6',
                category: "Books",
                title: "Starter Wiccan Spellbook",
                description: ""
            },
            {
                amazonId: '1507209142',
                linkId: 'fa6a9a9cefb67c6fecb8418c525161e6',
                category: "Books",
                title: "Magickal Self Care",
                description: ""
            },
            {
                amazonId: 'B074XFP27L',
                linkId: 'a5d2dd893afc5c97d8713b9730bcbb9e',
                category: "Magickal Tools",
                title: "Copper Bowl",
                description: ""
            },
            {
                amazonId: 'B076ZZG94L',
                linkId: '44803fe62b614c16967abe033854cc11',
                category: "Herbs",
                title: "Smudge & Cleansing Kit",
                description: ""
            },
            {
                amazonId: 'B07Q4Y813W',
                linkId: '2e6f80c7830920c727e3fa9c3e5d731d',
                category: "Herbs",
                title: "Deluxe Smudging Set",
                description: ""
            },
            // {
            //     amazonId: '',
            //     linkId: '',
            //     category: "A",
            //     title: "",
            //     description: ""
            // },
            // {
            //     amazonId: '',
            //     linkId: '',
            //     category: "A",
            //     title: "",
            //     description: ""
            // }
        ].sort((a, b) => { return a.category > b.category ? 1 : -1 })
    }
}

export default Pages



// https://www.amazon.com/dp/B07DVDZ6WR/ref=cm_sw_r_cp_awdb_t1_DDj2DbCPDE4RJ
// Natural Abalone shell and stand

// https://www.amazon.com/dp/1578636426/ref=cm_sw_r_cp_awdb_t1_SQj2DbHMMARDN
// Crystal gridwork

// https://www.amazon.com/dp/B07H3KRBLN/ref=cm_sw_r_cp_awdb_t1_qAQ2Db33AW5VA
// Gold Bell

// https://www.amazon.com/dp/B07NJ2GGZV/ref=cm_sw_r_cp_awdb_t1_LIQ2DbVZXB4FP
// Tabetan Singing Bowl

// https://www.amazon.com/dp/B000WS73QO/ref=cm_sw_r_cp_awdb_t1_pph3Db4KQGJ49
// Triple Goddess Altar Cloth

// https://www.amazon.com/dp/B01M0A3478/ref=cm_sw_r_cp_awdb_t1_2sh3DbG93EVAJ
// Velvet altar cloth

// https://www.amazon.com/dp/B07N99GT3V/ref=cm_sw_r_cp_awdb_t1_Tzh3DbHGQM3TV
// Goddess altar cloth and statue

// https://www.amazon.com/Handmade-Pentagram-Embossed-Appointment-Organizer/dp/B072JX3L8K/ref=mp_s_a_1_3?keywords=book+of+shadows&qid=1574729878&sprefix=book+of+sha&sr=8-3#
// Pentagram Leather book of shadows

// https://www.amazon.com/Embossed-Notebook-Hardcover-Sketchbook-Scrapbook/dp/B01FNMQ8U0/ref=mp_s_a_1_18?keywords=book+of+shadows+hardcover+journal&qid=1574730485&sprefix=book+of+shadows+ha&sr=8-18#
// Embossed leather journal 

// https://www.amazon.com/Assorted-Dripless-Congregation-Candlelight-Decorations/dp/B07V1X1J4V/ref=mp_s_a_1_5?keywords=altar%2Bcandles&qid=1574734261&sprefix=altar%2Bcan&sr=8-5&th=1&psc=1#
// Altar assorted color candles 

// https://www.amazon.com/Ceramic-Chime-Ritual-Candle-Holders/dp/B07RT4D8HS/ref=mp_s_a_1_6?keywords=altar%2Bcandles%2Bholders&qid=1574735001&sr=8-6&th=1&psc=1#
// Ceramic altar candle holders 

// https://www.amazon.com/dp/B074R8GLND/ref=cm_sw_r_cp_awdb_t1_h1i3DbXFPTJSB
// Ceramic candle holders

// https://www.amazon.com/dp/B078JWRC31/ref=cm_sw_r_cp_awdb_t1_c-i3DbAQ6FES3
// Beginner essentials oils set
