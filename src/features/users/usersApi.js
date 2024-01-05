import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    // get all user
    getAllUsers: builder.query({
      query: () => `/users/private`,
    }),
    getUsersProfile: builder.query({
      query: () => `/users/private/profile`,
    }),
    updateUserProfile: builder.mutation({
      query: () => `/users/private/update-profile`,
    }),
    deleteUserAccount: builder.mutation({
      query: () => `/users/private/delete-profile`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUsersProfileQuery,useUpdateUserProfileMutation,useDeleteUserAccountMutation } = usersApi;
