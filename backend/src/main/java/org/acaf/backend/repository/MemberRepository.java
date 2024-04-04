package org.acaf.backend.repository;

import org.springframework.stereotype.Repository;
import org.acaf.backend.models.Member;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
}
