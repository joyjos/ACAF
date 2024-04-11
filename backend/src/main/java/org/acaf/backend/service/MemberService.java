package org.acaf.backend.service;

import java.util.List;
import java.util.Optional;

import org.acaf.backend.models.Member;
import org.acaf.backend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.NoResultException;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public Member save(Member member) {
        return memberRepository.save(member);
    }

    public List<Member> findAll() {
        return memberRepository.findAll();
    }

    public Member updateMember(Integer id, Member updatedMember) {

        String name = updatedMember.getName();
        String category = updatedMember.getCategory();
        Integer cuantity = updatedMember.getCuantity();
        if (updatedMember == null || name == null || category == null || cuantity == null) {
            throw new IllegalArgumentException("Los datos del miembro actualizado son inválidos");
        }

        Optional<Member> teamOptional = memberRepository.findById(id);
        if (teamOptional.isPresent()) {
            Member existingMember = teamOptional.get();
            existingMember.setName(updatedMember.getName());
            existingMember.setCategory(updatedMember.getCategory());
            existingMember.setCuantity(updatedMember.getCuantity());
            return memberRepository.save(existingMember);
        } else {
            throw new NoResultException("No se encontró el miembro con el ID: " + id);
        }
    }

    public void deleteMember(Integer id) {
        memberRepository.deleteById(id);
    }
    
}
