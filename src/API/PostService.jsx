
import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://ma.tt/wp-json/wp/v2/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://ma.tt/wp-json/wp/v2/posts/' + id) 
        return response;
    }
    static async getCommentsByPostId(id){
        const response = await axios.get(`https://ma.tt/wp-json/wp/v2/comments?post=${id}`) 
        return response;
    }


    static async getImageById(id){
        const response = await axios.get(`https://softcomputers.org/wp-json/wp/v2/media/${id}/guid`) 
        return response;
    }
}