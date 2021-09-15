/* Components */
import { CardInfoProfile } from "components/CardInfoProfile/CardInfoProfile";
import { NavPages } from 'components/NavPages/NavPages';
import { SearchFollowers } from './components/SearchFollowers/SearchFollowers';
import { CardFriend } from './components/ListFriends/CardFriend';
import { FooterActionButtons } from 'components/FooterActionButtons/FooterActionButtons';
import { GridCards } from 'components/GridCards/GridCards';

export function Followers (props) {
    return (
        <div className="container">
            <NavPages titleHeaderPage="Seguidores de Quimera" history={props.history} />

            <GridCards>
                <CardInfoProfile number="200"  textCard="Seguidos" />
                <CardInfoProfile number="100k"  textCard="Seguidores" />
                <CardInfoProfile number="5"  textCard="Seguidores en común" />
            </GridCards> 

            <SearchFollowers/>

            <section className="section-listUser">
                <CardFriend userName="simona.7w7" name="Simona"/>
                <CardFriend userName="simona.7w7" name="Simona"/>
                <CardFriend userName="simona.7w7" name="Simona"/>
                <CardFriend userName="simona.7w7" name="Simona"/>
                <CardFriend userName="simona.7w7" name="Simona"/>
                <CardFriend userName="simona.7w7" name="Simona"/>
                <CardFriend userName="simona.7w7" name="Simona"/>
                <CardFriend userName="simona.7w7" name="Simona"/>
                
            </section>
            <FooterActionButtons/>
        </div>
    )
}
