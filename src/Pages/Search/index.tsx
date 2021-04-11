import React, { useState } from 'react';
import FormSearch from './components/FormSearch';
import './styles.css';
import ButtonDefault from '../../core/components/Button/Button';
import FormDetail from './components/FormsDetail';
import BoxDetail from './components/BoxDetail';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Mensagem from './components/Message/Message';
import ImageLoader from './components/Loaders/ImageLoarder';


type InfoForm = {
  avatar_url: string;
  public_repos: string,
  followers: string,
  following: string,
  company: string;
  blog: string;
  location: string;
  created_at: string;
  html_url: string;
}


const Search = () => {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState<InfoForm>(
    {
      avatar_url: '',
      public_repos: '',
      followers: '',
      following: '',
      company: '',
      blog: '',
      location: '',
      created_at: '',
      html_url: ''
    }
  );
 
  const [isShow, setIsShow] = useState(false);
  const BASE_URL = 'https://api.github.com/users'
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsShow(true)
 
    axios(`${BASE_URL}/${search}`)
    .then(response => setUserData(response.data))
    .catch(() => { Mensagem(); setIsShow(false); setUserData(userData) });
   
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const createFormatDt = dayjs(userData?.created_at).format("DD/MM/YYYY");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormSearch title="Encontre um perfil Github"  >
          <div>
            <input className="search-box-input"
              required
              value={search}
              onChange={handleChange}
              placeholder="Usuário Github" />
          </div>
        </FormSearch>
      </form>
       {isShow &&(
      <div className="result-search-container">
        <div className="info-detail">
          {!userData.avatar_url ?  <ImageLoader/> :(  
            <img
              src={userData.avatar_url}
              alt=""
              height="200px"
            />
            ) }  
              <div className="position-detail">
              {!userData.created_at ?  <ImageLoader/> :( 
                <div>
               
                  <div className="btn-box">
                
                    <BoxDetail title={`Repositorios Publicos: ${userData.public_repos}`}></BoxDetail>
                    <BoxDetail title={`Seguidores: ${userData.followers}`}></BoxDetail>
                    <BoxDetail title={`Seguindo: ${userData.following}`}></BoxDetail> 
                    
                  </div>
                  <FormDetail title="Informações">
                  
                    <div>
                      
                      <input className="search-box-detail"
                        required
                        value={`Empresa: ${userData.company}`}
                        placeholder="Empresa" />
                      <input className="search-box-detail"
                        required
                        value={`Web Site/Blog: ${userData.blog} `}
                        placeholder="Web Site/Blog" />
                      <input className="search-box-detail"
                        required
                        value={`Localidade: ${userData.location}`}
                        placeholder="Localidade" />
                      <input className="search-box-detail"
                        required
                        value={`Membro desde: ${createFormatDt}`}
                        placeholder="Membro desde:" />
                    </div>
                 
                  </FormDetail>
                </div>
                  )}
              </div>
        </div>
        <div className="btn-search">
        <a target='_blank' href={`${userData.html_url}`} >
          <ButtonDefault text="ver perfil" />
          </a>
        </div>
      </div>)}

    </>

  )
}

export default Search;
