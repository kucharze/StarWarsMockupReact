import axios from "axios";
import React, {useEffect, useState} from 'react'

function SpaceShips() {
  const [ships,setShips] = useState([])

  //GET http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='cespedes%25'
  const getData = async () => {
    let data = await axios.get(
        // "http://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2017'&player_id='592789'"
        // "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'"
        // "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='cespedes%25'"
        "https://swapi.dev/api/starships/5"
        // options
        );

    //let item = await data.data;
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>The SpaceShips Section</h1>
    </div>
  )
}

export default SpaceShips
