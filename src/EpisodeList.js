import React from "react";
import axios from 'axios'
import episodeApi from "EpisodeApi"

class EpisodeDetail extends React.Component {
    state = {
        episode: this.props.episode,
    }

    render() {
        const { episode: { id, name, image : { medium : thumbUrl } }} = this.state;
        return (
            <div>
                {id} : {name}
                <img src={thumbUrl} alt={name} />
            </div>
        )
    }
}


class EpisodeList extends React.Component {
    state = {
        episodeList: [],
    }

    async componentDidMount() {
        // const apiUrl = "http://api.tvmaze.com/singlesearch/shows"
        const apiUrl = "/singlesearch/shows"
        const params = {
                q: "girls",
                embed: "episodes",
        }
        try {
            // const response = await axios.get(apiUrl, { params })
            const response = await episodeApi.get(apiUrl, { params })
            const { data: { _embedded : { episodes }} } = response;
            this.setState({
                episodeList: episodes,
            })
        }
        catch(error) {
            console.log(error);
        }
    }

    render() {
        const { episodeList } = this.state;
        return (
            <div>
                <h1>Episode List</h1>
                {
                    episodeList.map(episode => 
                        <EpisodeDetail episode={episode} />
                    )
                }
            </div>
        )
    }
}

export default EpisodeList;