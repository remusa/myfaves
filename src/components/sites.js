import PropTypes from 'prop-types';
import React from 'react';
import sitesList from '../data/sites';
import './sites.scss';

const initialState = {
    filter: '',
}

const SiteCard = ({site}) => (
    <a
        href={site.url}
        className="sites-list__card"
        target='_blank'
        rel="noopener noreferrer">

        <div className="sites-list__card__image">
            <img
                src={site.img}
                alt="site logo"
                className="sites-list__card__image__src"
                />
        </div>

        {/* <div className='sites-list__card__divider' /> */}

        {/* <div className='sites-list__card__info'>
            <h4         className='sites-list__card__info__name'>{site.name}</h4>

            <p>Categories: {site.categories.join(', ')}</p>
        </div> */}
    </a>
)

SiteCard.propTypes = {
    site: PropTypes.object.isRequired,
}

class Sites extends React.Component {
    constructor(props) {
        super(props)

        this.state = initialState

        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange(e) {
        e.preventDefault()

        this.setState({
            filter: e.target.value.toLowerCase(),
        })
    }

    render() {
        const { filter } = this.state
        const filteredList = filter === '' ?
            sitesList :
            sitesList.filter(site =>
                !site.name.toLowerCase().indexOf(filter)
            )

        return (
            <div className="sites-container">
                <h2>Favorites</h2>

                <fieldset>
                    <form>
                        <label
                        className="sites-filter"
                        htmlFor="sites-filter"
                        >
                            Filter...
                        </label>

                        <input id="sites-filter"
                        placeholder="Search sites..."
                        type="text"
                        autoComplete="on"
                        value={this.state.filter}
                        onChange={this.handleFilterChange}
                        ></input>
                    </form>
                </fieldset>

                <div className="sites-list">
                    {filteredList.map(site => {
                        return (
                            <SiteCard
                                key={site.url}
                                site={site}
                            />
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Sites
