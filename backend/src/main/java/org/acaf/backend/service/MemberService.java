package org.acaf.backend.service;

import java.util.List;

import org.acaf.backend.models.Member;
import org.acaf.backend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Member updatedMember(Integer id, Member updatedMember) {

        String name = updatedMember.getName();
        String category = updatedMember.getCategory();
        Integer cuantity = updatedMember.getCuantity();
        if (updatedMember == null || name == null || category == null || cuantity == null) {
            throw new IllegalArgumentException("Los datos del miembro actualizado son inválidos");
        }

        return memberRepository.save(updatedMember);

    }
}
