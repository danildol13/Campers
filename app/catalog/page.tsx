"use client";
import Container from "@/Components/shared/Container/Container";
import css from "./catalog.module.css";
import Filter from "@/Components/Filter/Filter";
import { useEffect } from "react";
import Camper from "@/Components/Camper/Camper";
import Button from "@/Components/shared/Button/Button";
import { useCamperStore } from "@/store/camperStore";
import Loader from "@/Components/shared/Loader/Loader";

export default function Catalog() {
  const allCampers = useCamperStore((state) => state.campers);
  const loadData = useCamperStore((state) => state.loadData);
  const setFilters = useCamperStore((state) => state.setFilters);
  const isLoading = useCamperStore((state) => state.isLoading);
  const hasMore = useCamperStore((state) => state.hasMore);

  useEffect(() => {
    if (allCampers.length === 0) loadData();
  }, [loadData, allCampers.length]);

  return (
    <section className={css.catalogSection}>
      <Container>
        <div className={css.catalog}>
          <aside>
            <Filter onFilterChange={setFilters} />
          </aside>
          <div className={css.camperContainer}>
            {allCampers.map((camper) => (
              <Camper oneCamp={camper} key={camper.id} />
            ))}

            {allCampers.length > 0 && hasMore && (
              <Button
                style="loadMoreButton"
                type="button"
                onClick={() => loadData()}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Load more"}
              </Button>
            )}
            
            {isLoading && <Loader />}
          </div>
        </div>
      </Container>
    </section>
  );
}
