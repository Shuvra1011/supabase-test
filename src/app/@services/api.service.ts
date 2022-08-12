import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";
import { Post } from "../@interfaces/post.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey)
    constructor(){}

    async createPost(post: Post) {
        const { data, error } = await this.supabase.from<Post>('posts').insert(post);
        return { data, error };
    }
}