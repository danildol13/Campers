import { getCampers } from "@/services/filterServices";
import { Filters, Infos } from "@/types/camper";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CamperStore {
  campers: Infos[];
  filters: Filters;
  favorites: string[];
  setFilters: (newFilters: Filters) => void;
  loadData: () => Promise<void>;
  reset: () => void;
  isLoading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  toggleFavorite: (id: string) => void;
}

export const useCamperStore = create<CamperStore>()(
  persist(
    (set, get) => ({
      campers: [],
      filters: { city: undefined, equipment: [], type: undefined },
      favorites: [],
      isLoading: false,
      error: null,
      page: 1,
      hasMore: true,

      setFilters: (newFilters) => {
        set({
          filters: newFilters,
          campers: [],
          page: 1,
        });
        get().loadData();
      },

      loadData: async () => {
        set({ isLoading: true });
        const { filters, page, campers } = get();
        try {
          const data = await getCampers(filters, page);

          set({
            campers: page === 1 ? data : [...campers, ...data],
            page: page + 1,
            hasMore: data.length === 4,
            error: null,
          });
        } catch (error) {
          console.error(error);
          set({ error: "Failed to load campers. Please try again." });
        } finally {
          set({ isLoading: false });
        }
      },

      reset: () => {
        set({
          campers: [],
          filters: { city: undefined, equipment: [], type: undefined },
          page: 1,
          hasMore: true,
        });
      },

      toggleFavorite: (id: string) => {
        const { favorites } = get();
        const isFavorite = favorites.includes(id);
        set({
          favorites: isFavorite
            ? favorites.filter((favId) => favId !== id)
            : [...favorites, id],
        });
      },
    }),
    {
      name: "camper-storage",
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    },
  ),
);
