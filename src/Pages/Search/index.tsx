import React, { useState } from 'react';
import FormSearch from './components/FormSearch';
import ImageLoader from './components/Loaders/ImageLoarder';
import InfoLoader from './components/Loaders/InfoLoader';
import GitImage from '../../core/assets/github-mark.png';
import './styles.css';
import ButtonDefault from '../../core/components/Button/Button';
import FormDetail from './components/FormsDetail';
import BoxDetail from './components/BoxDetail';
import dayjs from 'dayjs';

type FormState = {
  avatar_url: string;
  public_repos: string,
  followers: string,
  following: string,
  company: string;
  blog: string;
  location: string;
  created_at: string;
}

const Search = () => {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState<FormState>(
    {
      avatar_url: '',
      public_repos: '',
      followers: '',
      following: '',
      company: '',
      blog: '',
      location: '',
      created_at: ''
    }
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)
    

    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse))
      .finally(() => {
        setIsLoading(false)
        // console.log(userData);
        // console.log(search);
      })
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
      <div className="result-search-container">
        <div className="info-detail">
          <div>
          {!userData  && (
             <img
             src={GitImage}
             alt=""
             height="200px"
           />
                )}
                </div>

          {isLoading ? <ImageLoader /> : (
            <img
              src={userData.avatar_url}
              alt=""
              height="200px"
            />)}
          <div className="position-detail">
            <div>
              {!userData && (<>
                <div className="btn-box">
                  <BoxDetail title="Repositorios Publicos:"></BoxDetail>
                  <BoxDetail title="Seguidores:"></BoxDetail>
                  <BoxDetail title="Seguindo: "></BoxDetail>
                </div>
                <FormDetail title="Informações">
                  <div>
                    <input className="search-box-detail"
                      required
                      value="Empresa:"
                      placeholder="Empresa" />
                    <input className="search-box-detail"
                      required
                      value="Web Site/Blog"
                      placeholder="Web Site/Blog" />
                    <input className="search-box-detail"
                      required
                      value="Localidade:"
                      placeholder="Localidade" />
                    <input className="search-box-detail"
                      required
                      value="Membro desde:"
                      placeholder="Membro desde:" />
                  </div>
                </FormDetail>
              </>
              )}
              {isLoading ? <InfoLoader /> : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
        <div className="btn-search">
          <ButtonDefault text="ver perfil" />
        </div>
      </div>

    </>

  )
}

export default Search;
